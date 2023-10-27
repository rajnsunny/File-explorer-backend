const mongoose = require('mongoose');
const ExplorerModel = require('../model/explorer'); 




const dataToInsert = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: []
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          items: []
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          items: []
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};

// Connect to MongoD

  const connect = async () => {
    try{
        mongoose.set('strictQuery',false)
        
        mongoose.connect(process.env.DB_STRING,{ useNewUrlParser: true, useUnifiedTopology: true } )
        .then(async () => {
            const explorerDocument = new ExplorerModel(dataToInsert);
            await explorerDocument.save();
            console.log('Data inserted into MongoDB');
          })
        .catch(err => {
            console.error('Error connecting to MongoDB:', err);
          });
        

        
    }
    catch (error){
        console.log(`DB Connection Error: ${error} `);
    }
}

module.exports = {connect};
