const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydb.db');

db.all("SELECT * FROM user_info", function(err,rows) {
    if(err) {
        console.log(err)
        return
    }
    console.log(rows)
})

db.close();