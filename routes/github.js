const router = require("express").Router();
const axios = require("axios");

const githubApiUrl = "https://api.github.com";

router.get("/repo/:id", function(req, res) {
  // rate limits are pretty low for non-authenticated requests.
  const request = {
    method: "get",
    url: githubApiUrl + "/repos/fostimus/" + req.params.id,
    headers: { "User-Agent": "fostimus" }
  };

  axios(request)
    .then(response => {
      res.json(response.data);
    })
    .catch(e => console.error(e));
});

module.exports = router;
