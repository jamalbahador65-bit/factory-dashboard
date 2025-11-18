const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Factory Dashboard Server is Running!',
    status: 'active',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/data', (req, res) => {
  console.log('Data received:', req.body);
  res.json({ 
    status: 'success',
    message: 'Data received from SIM800L',
    data: req.body
  });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Test successful! Server is working.' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
