const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve an assets directory for images/static assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Keep serving other static files in project root if needed
app.use(express.static(__dirname));

// Serve the static portfolio.html file at the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

// Handle the original contact form submission
app.post('/send-contact', (req, res) => {
    const { name, email, message } = req.body;

    // Log the received data to the console
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    // --- TODO: Implement your email sending logic here ---
    // This is where you would use a service like Nodemailer
    // to send an email with the form data.
    // ---------------------------------------------------
    
    res.status(200).json({ message: 'Message received successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});