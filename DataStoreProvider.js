// this module will define a data abstraction layer to insulate the Express
// server from the implementation details of any particular data store

class DataStoreProvider {
  open() {}
  close() {}
  createAccount() {}
  deposit() {}
  withdraw() {}
  getAccount() {}
  getAllAccounts() {}
  getAllTransactions() {}
}

module.exports = DataStoreProvider;

