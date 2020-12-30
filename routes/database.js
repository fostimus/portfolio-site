const router = require("express").Router();
const models = require("../models");

router.post("/playlists", function(req, res) {
  var data = [
    {
      name: "Test1",
      description: "Testing insert many from mongoose",
      url: "don't use me"
    },
    {
      name: "Test2",
      description: "Testing insert many from mongoose",
      url: "don't use dsadadgrtergme"
    },
    {
      name: "Test3",
      description: "Testing insert many from mongoose",
      url: "don't dsdsduse me"
    }
  ];

  models.playlist.insertMany(data, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/playlists", function(req, res) {
  models.playlist.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
