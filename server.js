const express = require("express");
const fileUpload = require("express-fileupload");
var cors = require("cors");
const app = express();
app.use(cors());
const passport = require("passport");
const cookieParser = require("cookie-parser");
const moongose = require("mongoose");
const User = require("./models/User")
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(fileUpload());

moongose.connect(
  "mongodb://localhost:27017/auth",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("auth connected to database")
);
// Upload Endpoint
app.post("/uploadphoto", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  if (req.body === null) {
    return res.status(400).json({ msg: "no name" });
  }
  const fs = require("fs");
  const file = req.files.file;
  const key = req.body.key;
  const name = req.body.name;

if(!fs.existsSync(`./client/public/uploads/${name}`))
{
  fs.mkdir(`./client/public/uploads/${name}`, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("New directory successfully created.");
    }
  });
}
  file.mv(`${__dirname}/client/public/uploads/${name}/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    if (file.name.split(".")[1] !== "mp4") {
     
      fs.rename(
        `./client/public/uploads/${name}/${file.name}`,
        `./client/public/uploads/${name}/picture.jpg`,
        function (err) {
          if (err) console.log("ERROR: " + err);
        }
      );
    } else {
      User.findOne({ email: name }, (err, user) => {
        if (err) {
            console.log(err);
        }
          if (user) {
            console.log('ok');
              user.video = key
              user.save()
            }
          }
      )
      fs.rename(
        `./client/public/uploads/${name}/${file.name}`,
        `./client/public/uploads/${name}/${key}.mp4`,
        function (err) {
          if (err) console.log("ERROR: " + err);
        }
      );
    }
    res.json({ key: key, filePath: `/uploads/${file.name}` });
  });
});

app.post("/uploadreels", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  if (req.body === null) {
    return res.status(400).json({ msg: "no name" });
  }
  const file = req.files.reels;
  const name = req.body.title;
  const email = req.body.email;
  const key = req.body.key;
  const fs = require("fs");
  file.mv(`${__dirname}/client/public/uploads/${email}/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    if (file.name.split(".")[1] !== "mp4") {
      fs.rename(
        `./client/public/uploads/${email}/${file.name}`,
        `./client/public/uploads/${email}/${key}.mp3`,
        function (err) {
          if (err) console.log("ERROR: " + err);
          res.json({ key: key, filePath: `/uploads/${file.name}` });
        }
      );
    } else {
      fs.rename(
        `./client/public/uploads/${email}/${file.name}`,
        `./client/public/uploads/${email}/${key}.mp4`,
        function (err) {
          if (err) console.log("ERROR: " + err);
          res.json({ key: key, filePath: `/uploads/${file.name}` });
        }
      );
    }
  });
});
const userRouter = require("./routes/User");
app.use("/user", userRouter);
app.use(passport.initialize());
// app.use( '/' , express.static( 'client-react/build' ) );
app.listen(5000, () => console.log("Server Started..."));
