// Bayan khatib 326107646
// אמיר חרירי
// תז: 327679049
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // ניתוב לדף הראשי
    if (req.url === '/' || req.url === '/page.html') {
        const filePath = path.join(__dirname, 'templates', 'page.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading the HTML file.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(content);
            }
        });
    } 
    // ניתוב לקובץ ה-CSS החיצוני
    else if (req.url === '/style.css') {
        const cssPath = path.join(__dirname, 'public', 'style.css');
        fs.readFile(cssPath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end('CSS file not found.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(content);
            }
        });
    } 

    else if (req.url === '/book-cover.png') {
    const imagePath = path.join(__dirname, 'public', 'book-cover.png');
    fs.readFile(imagePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Image not found.');
        } else {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(content);
        }
    });
  }
    // שגיאת 404 לכל ניתוב אחר
    else {
        res.writeHead(404);
        res.end('Page not found.');
    }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
