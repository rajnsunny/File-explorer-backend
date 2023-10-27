const express = require('express');
const cors = require('cors');
const { connect } = require('./db/connect');
const ExplorerModel = require('./model/explorer');

require('dotenv').config()

const app = express();


const PORT = process.env.PORT


//middlewares
app.use(express.json());
app.use(cors());


app.get('/api/explorer', async (req, res) => {
    try {
      const explorerData = await ExplorerModel.findOne({ id: '1' });
      res.json(explorerData);
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // POST endpoint to update the JSON data
  app.post('/api/explorer', async (req, res) => {
    try {
      const updatedExplorer = req.body;
      await ExplorerModel.updateOne({ id: '1' }, { $set: updatedExplorer });
      res.json({ message: 'Explorer data updated successfully' });
    } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  



const server = () => {

    connect()     //Database 
    app.listen(PORT,() => {
        console.log(`You are listening to Port: ${PORT}`)
    })

}

server()