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

function getHostname() {
  return os.hostname();
}

// Serve static files (like logo image)
app.use(express.static(path.join(__dirname, 'images')));

function styledPage(host, ip) {
  return `
  <html>
    <head>
      <title>DigiStack Solutions</title>
      <style>
        body {
          background-color: #f1c40f; /* Yellow background */
          font-family: Arial, sans-serif;
          text-align: center;
          margin: 0;
          padding: 0;
        }
        .header {
          background-color: #333;
          color: white;
          height: 60px;
          padding: 15px 0;
          font-size: 20px;
          font-weight: bold;
          overflow: hidden;
          position: relative;
        }
        .scroll-text {
          display: inline-block;
          white-space: nowrap;
          position: absolute;
          will-change: transform;
          animation: scroll-left 12s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .content {
          margin-top: 50px;
        }
        .info {
          font-size: 18px;
          margin: 15px 0;
        }
        .info span {
          font-weight: bold;
        }
        .logo {
          margin-top: 30px;
        }
        .logo img {
          width: 200px;
          height: auto;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="scroll-text">✨ DigiStack Solutions Node.js Project ✨</div>
      </div>
      <div class="content">
        <div class="info"><span>Hostname:</span> ${host}</div>
        <div class="info"><span>IP Address:</span> ${ip}</div>
        <div class="logo">
          <img src="/SSO.png" alt="SAPSECOPS Logo">
        </div>
      </div>
    </body>
  </html>
  `;
}

// Route: /digistack
app.get('/digistack', (req, res) => {
  const ip = getServerIp();
  const host = getHostname();
  res.send(styledPage(host, ip));
});

// Start the server
app.listen(app.get('port'), () => {
  console.log(`Node JS app running at http://localhost:${app.get('port')}/digistack`);
});
