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
    .catch(e => {
      if (e.response.status) {
        res.json({ error: "Unauthorized: rate limit likely exceeded" });
      } else {
        res.json({ error: "Server error: admin should check logs." });
        console.error(e);
      }
    });
});

module.exports = router;
