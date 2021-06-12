const admin = require("firebase-admin");

var serviceAccount = require("./pfe2021-270a5-firebase-adminsdk-u4nqg-58d5af73a9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pfe2021-270a5-default-rtdb.firebaseio.com"
});
const dbr = admin.database();
module.exports = dbr;