const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/members.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize data file
function ensureDataFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
}

// Get all members
router.get('/', (req, res) => {
  try {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const members = JSON.parse(data);
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: 'Error reading data', error: error.message });
  }
});

// Get single member by index
router.get('/:id', (req, res) => {
  try {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const members = JSON.parse(data);
    const member = members[req.params.id];
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: 'Error reading data', error: error.message });
  }
});

// Create new member
router.post('/', (req, res) => {
  try {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const members = JSON.parse(data);
    
    const newMember = {
      id: members.length + 1,
      ...req.body,
      submittedAt: new Date().toISOString(),
      status: 'Active'
    };
    
    members.push(newMember);
    fs.writeFileSync(DATA_FILE, JSON.stringify(members, null, 2));
    
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: 'Error saving data', error: error.message });
  }
});

// Delete member
router.delete('/:id', (req, res) => {
  try {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    let members = JSON.parse(data);
    members = members.filter((_, index) => index !== parseInt(req.params.id));
    fs.writeFileSync(DATA_FILE, JSON.stringify(members, null, 2));
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting data', error: error.message });
  }
});

// Update member (for changing membership plan)
router.put('/:id', (req, res) => {
  try {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    let members = JSON.parse(data);
    if (members[req.params.id]) {
      members[req.params.id] = { ...members[req.params.id], ...req.body };
      fs.writeFileSync(DATA_FILE, JSON.stringify(members, null, 2));
      res.json(members[req.params.id]);
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating data', error: error.message });
  }
});

// Get HTML dashboard
router.get('/dashboard/view', (req, res) => {
  try {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const members = JSON.parse(data);
    
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Gym Data Dashboard</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: Arial, sans-serif; 
            background: linear-gradient(135deg, #1a1a1a 0%, #CC5555 100%);
            min-height: 100vh;
            padding: 20px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          }
          h1 { 
            color: #CC5555; 
            margin-bottom: 10px;
            text-align: center;
          }
          .stats {
            text-align: center;
            margin-bottom: 30px;
            color: #666;
          }
          .stats p {
            font-size: 18px;
            font-weight: bold;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          thead {
            background: #CC5555;
            color: white;
          }
          th {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
          }
          td {
            padding: 12px;
            border: 1px solid #ddd;
            word-wrap: break-word;
          }
          tr:nth-child(even) {
            background: #f9f9f9;
          }
          tr:hover {
            background: #f0f0f0;
          }
          .no-data {
            text-align: center;
            color: #999;
            padding: 40px;
            font-size: 18px;
          }
          .refresh-btn {
            background: #CC5555;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-bottom: 20px;
          }
          .refresh-btn:hover {
            background: #FF6B6B;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            color: #999;
            border-top: 1px solid #ddd;
            padding-top: 20px;
          }
          .badge {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
          }
          .badge.basic { background: #e3f2fd; color: #1976d2; }
          .badge.premium { background: #fff3e0; color: #f57c00; }
          .badge.elite { background: #fce4ec; color: #c2185b; }
          .action-btn {
            padding: 6px 12px;
            margin: 2px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
            transition: all 0.3s ease;
          }
          .edit-btn {
            background: #2196F3;
            color: white;
          }
          .edit-btn:hover {
            background: #0b7dda;
          }
          .delete-btn {
            background: #f44336;
            color: white;
          }
          .delete-btn:hover {
            background: #da190b;
          }
          .save-btn {
            background: #4CAF50;
            color: white;
          }
          .save-btn:hover {
            background: #45a049;
          }
          .cancel-btn {
            background: #999;
            color: white;
          }
          .cancel-btn:hover {
            background: #777;
          }
          .edit-row {
            background: #fff9c4 !important;
          }
          .membership-select {
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
          }
          .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.4);
          }
          .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            border-radius: 8px;
            width: 90%;
            max-width: 300px;
            text-align: center;
          }
          .modal-btn {
            padding: 10px 20px;
            margin: 5px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
          }
          .modal-confirm {
            background: #f44336;
            color: white;
          }
          .modal-cancel {
            background: #999;
            color: white;
          }
        </style>
        <script>
          let deleteIndex = null;
          
          function showDeleteModal(index) {
            deleteIndex = index;
            document.getElementById('deleteModal').style.display = 'block';
          }
          
          function closeDeleteModal() {
            deleteIndex = null;
            document.getElementById('deleteModal').style.display = 'none';
          }
          
          function confirmDelete() {
            if (deleteIndex !== null) {
              fetch(\`/api/members/\${deleteIndex}\`, {
                method: 'DELETE'
              }).then(() => {
                location.reload();
              }).catch(err => alert('Error deleting member: ' + err));
            }
          }
          
          function editMembership(index) {
            const row = document.getElementById('row-' + index);
            const membershipCell = row.querySelector('.membership-cell');
            const currentMembership = membershipCell.textContent.trim();
            
            membershipCell.innerHTML = \`
              <select class="membership-select" id="plan-\${index}">
                <option value="Basic" \${currentMembership === 'Basic' ? 'selected' : ''}>Basic</option>
                <option value="Premium" \${currentMembership === 'Premium' ? 'selected' : ''}>Premium</option>
                <option value="Elite" \${currentMembership === 'Elite' ? 'selected' : ''}>Elite</option>
              </select>
            \`;
            
            const actionCell = row.querySelector('.action-cell');
            actionCell.innerHTML = \`
              <button class="action-btn save-btn" onclick="saveMembership(\${index})">Save</button>
              <button class="action-btn cancel-btn" onclick="location.reload()">Cancel</button>
            \`;
            row.classList.add('edit-row');
          }
          
          function saveMembership(index) {
            const newPlan = document.getElementById('plan-' + index).value;
            fetch(\`/api/members/\${index}\`, {
              method: 'PUT',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({membershipType: newPlan})
            }).then(() => {
              location.reload();
            }).catch(err => alert('Error updating membership: ' + err));
          }
          
          window.onclick = function(event) {
            const modal = document.getElementById('deleteModal');
            if (event.target === modal) {
              closeDeleteModal();
            }
          }
        </script>
      </head>
      <body>
        <div class="container">
          <h1>🏋️ FitForce Gym - Member Data Dashboard</h1>
          <div class="stats">
            <p>📊 Total Members: <strong>${members.length}</strong></p>
            <button class="refresh-btn" onclick="location.reload()">🔄 Refresh Data</button>
          </div>
          
          ${members.length === 0 ? `
            <div class="no-data">
              ℹ️ No members yet. Fill out the form on the website to see data here!
              <br><br>
              <a href="http://localhost:5173/" style="color: #CC5555; text-decoration: none;">
                Go to Website →
              </a>
            </div>
          ` : `
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Membership</th>
                  <th>Age</th>
                  <th>Goal</th>
                  <th>Submitted</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${members.map((member, index) => `
                  <tr id="row-${index}">
                    <td>${index + 1}</td>
                    <td>${member.name || 'N/A'}</td>
                    <td>${member.email || 'N/A'}</td>
                    <td>${member.phone || 'N/A'}</td>
                    <td class="membership-cell">
                      <span class="badge ${member.membershipType?.toLowerCase() || 'basic'}">
                        ${member.membershipType || 'Basic'}
                      </span>
                    </td>
                    <td>${member.age || 'N/A'}</td>
                    <td>${member.goal || 'N/A'}</td>
                    <td>${new Date(member.submittedAt).toLocaleString()}</td>
                    <td class="action-cell">
                      <button class="action-btn edit-btn" onclick="editMembership(${index})">Edit Plan</button>
                      <button class="action-btn delete-btn" onclick="showDeleteModal(${index})">Delete</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          `}
          
          <div class="footer">
            <p>✅ Data is saved automatically when you submit the form</p>
            <p>📱 Visit: <strong>http://localhost:5173/</strong> to submit more data</p>
            <p>🔄 This page auto-saves to: <strong>backend/data/members.json</strong></p>
          </div>
        </div>
        
        <div id="deleteModal" class="modal">
          <div class="modal-content">
            <h3>Delete Member?</h3>
            <p>Are you sure you want to delete this member? This cannot be undone.</p>
            <button class="modal-btn modal-confirm" onclick="confirmDelete()">Delete</button>
            <button class="modal-btn modal-cancel" onclick="closeDeleteModal()">Cancel</button>
          </div>
        </div>
      </body>
      </html>
    `;
    
    res.send(html);
  } catch (error) {
    res.status(500).send(`<h1>Error</h1><p>${error.message}</p>`);
  }
});

module.exports = router;
