const mongoose = require('mongoose');

const explorerSchema = new mongoose.Schema({
  id: String,
  name: String,
  isFolder: Boolean,
  items: [
    {
      type: mongoose.Schema.Types.Mixed, // Can store a nested explorerSchema
    },
  ],
});

// Create a model for the "explorer" collection
const ExplorerModel = mongoose.model('Explorer', explorerSchema);

module.exports = ExplorerModel;



