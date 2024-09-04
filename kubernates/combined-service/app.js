
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002; 


const helloServiceUrl = 'http://hello-service:80/hello'; 
const worldServiceUrl = 'http://world-service:80/world'; 
app.get('/', async (req, res) => {
  try {
    const helloResponse = await axios.get(helloServiceUrl);
    const worldResponse = await axios.get(worldServiceUrl);
    if (helloResponse.status === 200 && worldResponse.status === 200) {
      res.send('Hello World');
    } else {
      res.status(500).send('Failed to get responses from the services');
    }
  } catch (error) {
    res.status(500).send('Error occured ');
  }
});
app.listen(port, () => {
  console.log(`Combined service is listening at http://localhost:${port}`);
});
