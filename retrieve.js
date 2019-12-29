var admin = require("firebase-admin");
var mysql = require('mysql');
var dbConfig = require('./config/db');

console.log(dbConfig.development);
var connection = mysql.createConnection(dbConfig.production);
// Fetch the service account key JSON file contents
var serviceAccount = require("./trustapp-e8e23-firebase-adminsdk-o57uu-b8ef2d37a0.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trustapp-e8e23.firebaseio.com/"
});
// Get a database reference to our users
var db = admin.database();
var ref = db.ref("users");

// Attach an asynchronous callback to read the data at our users reference
ref.on("value", function(snapshot) {
  // console.log(snapshot.val());
  snapshot.forEach((user) => {
      // console.log(user.val().id);
      var INSERT_USER_SQL = "INSERT INTO `users` (`id`, `image`, `inviteAble`, `name`) VALUES (?, ?, ?, ?)";
      var params = [
          user.val().id,
          user.val().image,
          user.val().inviteAble,
          user.val().name,
      ];
      connection.query(INSERT_USER_SQL, params);
  });
  connection.end();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function insertData(snapshot)
{

}
