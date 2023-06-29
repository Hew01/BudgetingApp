const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/';

// Database name
const dbName = 'budgeting'; // Name of your database

// Collection name
const collectionName = 'budgetData'; // Name of your collection

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }

  console.log('Connected successfully to the server');

  // Get the database instance
  const db = client.db(dbName);

  // Create a new collection
  db.createCollection(collectionName, function(err, result) {
    if (err) {
      console.error('Failed to create collection:', err);
      return;
    }

    console.log(`Collection '${collectionName}' created successfully`);

    // Perform collection operations
    // ...

    // Close the database connection
    client.close();
  });
});
