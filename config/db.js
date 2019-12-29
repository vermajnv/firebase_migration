module.exports = {
  "development": {
    "user": "root",
    "password": "",
    "database": "firebase",
    "host": "127.0.0.1",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "user": "",
    "password": '',
    "database": "",
    "host": "",
    "dialect": "mysql",
    // "port" : '2083',
    "operatorsAliases": false
  }
}
