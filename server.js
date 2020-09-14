const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./app/models');
const dbConfig = require('./app/config/db.config');
const Role = db.role;
const PORT = process.env.PORT || 8080;

app.use(cors({ orgin: "http://localhost:8081" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(`${dbConfig.uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Success connect to MongoDB");
    initRole();
  })
  .catch(err => {
    console.log("Connect error ", err);
    process.exit();
  })

app.get('/', (req, res) => {
  res.json({ message: 'index' });
});
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/data.routes')(app);

function initRole() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({ name: "user" })
      .save(err => {
        if (err) { console.log("error ", err) }
        console.log("Added 'user' to roles collection");
      });
      new Role({ name: "moderator" })
      .save(err => {
        if (err) { console.log("error ", err) }
        console.log("Added 'moderator' to roles collection");
      });
      new Role({ name: "admin" })
      .save(err => {
        if (err) { console.log("error ", err) }
        console.log("Added 'user' to roles collection");
      });
    }
  });
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));