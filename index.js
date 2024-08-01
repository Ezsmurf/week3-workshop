const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const users = [
    { email: 'email1@com.au', password: '123' },
    { email: 'email2@com.au', password: '456' },
    { email: 'email3@com.au', password: '789' },
];

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Login</title>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="script.js"></script>
        </head>
        <body>
            <form action="/login" method="post">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <br>
                <button type="submit">Login</button>
            </form>
        </body>
        </html>
    `);
});

app.get('/account', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Account</title>
            </head>
            <body>
                <h2>Welcome, User</h2>
                <img src="https://placehold.co/600x400/orange/white" alt="Profile Picture">
                <p>Account Details: Dummy data</p>
            </body>
        </html>
    `);
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
