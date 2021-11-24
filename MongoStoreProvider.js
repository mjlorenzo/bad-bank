// this module describes a concrete implementation of the 
// DataStoreProvider "interface" implementing MongoDB

// import our "interface"
const DataStoreProvider = require("./DataStoreProvider");
// require the MongoDB library and grab the MongoClient class
const MongoClient = require("mongodb").MongoClient;

// constants defining our identifiers for MongoDB
const DATABASE_NAME = "bad-bank";
const ACCOUNTS_COLLECTION = "accounts";

// concrete implementation extends the base class
class MongoStoreProvider extends DataStoreProvider {
  // take relevant information for this store and store as
  // instance variables
  constructor(url, options) {
    super();
    this.url = url;
    this.options = options;
  }

  // override open()
  open() {
    // return a Promise
    return new Promise((resolve, reject) => {
      // preserve the "this" reference for use in later callback
      let that = this;
      // attempt the connection
      MongoClient.connect(this.url, this.options, (err, client) => {
        // error? reject the Promise
        if (err)
          reject(err);
        
        // if we got here, success! store the client in our instance
        that.client = client;
      });
    });
  }

  // override createAccount()
  createAccount(name, email, password) {
    // preserve "this"
    let that = this;
    // return a Promise
    return new Promise((resolve, reject) => {
      // if that.client is undefined, we haven't called open() or it failed
      if (!that.client)
        reject(new Error("Client not connected"));
      
      // grab references to database and collection
      let db = that.client.db(DATABASE_NAME);
      let collection = db.collection(ACCOUNTS_COLLECTION);
      let document = { name, email, password };

      // attempt to insert our document
      collection.insertOne(document, { w: 1 }, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    })
  }

  // override getAllAccounts()
  getAllAccounts() {
    // preserve "this"
    let that = this;
    // return a Promise
    return new Promise((resolve, reject) => {
      // no connection, no bueno
      if (!that.client)
        reject(new Error("Client not connected"));
      
      // grab references to db and collection
      let db = that.client.db(DATABASE_NAME);
      let collection = db.collection(ACCOUNTS_COLLECTION);
      
      // try to retrieve the collection
      collection.find().toArray((err, result) => {
        // if error, reject
        if (err)
          reject(err);
        
        resolve(result);
      });
    });
  }

  // override close()
  close() {
    // close the connection
    this.client.close();
    // get rid of the reference
    delete this.client;
  }
}

module.exports = MongoStoreProvider;