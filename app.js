const express = require("express");
const path = require("path");
const cfenv = require("cfenv");
const os = require("os");

const app = express();
const appEnv = cfenv.getAppEnv();

app.set('port', process.env.PORT || 9990);

function getServerIp() {
    const interfaces = os.networkInterfaces();
    for (let iface in interfaces) {
        for (let alias of interfaces[iface]) {
            if (alias.family === 'IPv4' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return 'IP not found';
}

// Serve static files from /images folder
app.use(express.static(path.join(__dirname, 'images')));

function addStyles(content) {
  return `
  <html>
    <head>
      <title>Welcome - sapsecops Solutions</title>
      <style>
        body {
          background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
          font-family: Arial, sans-serif;
          color: #333;
          text-align: center;
          padding: 50px;
          animation: fadeIn 1.5s ease-in-out;
        }
        h2 {
          margin: 20px 0;
        }
        span {
          color: red;
        }
        .card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          display: inline-block;
          animation: slideUp 1.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h2>✨ Welcome to <b>sapsecops Solutions</b> ✨</h2>
        <p>${content}</p>
        <h4>We are glad to see you here! 🚀</h4>
      </div>
    </body>
  </html>
  `;
}

// Route: /digistack
app.get('/digistack', (req, res) => {
  const ip = getServerIp();
  res.send(addStyles(`
    <h2>Your Server IP Address: <span>${ip}</span></h2>
  `));
});

// Route: /docker
app.get('/docker', (req, res) => {
  const ip = getServerIp();
  res.send(addStyles(`
    <h2><span style="color:green;">Docker App</span> is running!</h2>
    <h2>Server IP Address: <span>${ip}</span></h2>
  `));
});

// Route: /html
app.get('/html', (req, res) => {
  res.send(addStyles(`<h2>Welcome</h2><h2>/html call successful ✅</h2>`));
});

// Route: /jsonData
app.get('/jsonData', (req, res) => {
  res.json({
    name: 'sapsecops Solutions',
    technology: 'DevOps',
    contact: '9980923226',
    email: 'digistacksolutions@gmail.com'
  });
});

// Route: /queryparam?key=course&name=devops
app.get('/queryparam', (req, res) => {
  res.send(addStyles(`<h2>${req.query.key}: ${req.query.name}</h2>`));
});

// Route: /status-code-404
app.get('/status-code-404', (req, res) => {
  res.status(404).send(addStyles('❌ Sorry, we cannot find that!'));
});

// Route: /status-code-500
app.get('/status-code-500', (req, res) => {
  res.status(500).send(addStyles('⚠️ Internal Server Error – custom message'));
});

// Route: /redirect
app.get('/redirect', (req, res) => {
  res.redirect('http://sapsecops.com');
});

// Start the server
app.listen(app.get('port'), () => {
  console.log(`Node JS app is running at http://localhost:${app.get('port')}/digistack`);
});
