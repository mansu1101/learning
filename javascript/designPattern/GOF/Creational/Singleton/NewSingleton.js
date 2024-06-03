class DatabaseConnection {
  constructor() {
    this.databaseConnection = 'dummytext';
  }

  getNewDBConnection() {
    return this.databaseConnection;
  }
}

module.exports = new DatabaseConnection();

/**
 * Why does this work? In Node.js, it works because of the module caching system. 
 The module caching system says that "modules are cached after the first time they are loaded" (source - Node.js docs). 
 That means in the second example above, the new instance exported is cached and re-used each time it's required. 

Therefore, these are the two ways of implementing the Singleton pattern in NodeJS. To recap:
Singleton is useful when you want only one instance of a class.
In NodeJS, we can make use of the module caching system to export an instance directly.

 */
