//requiring todolist model
const TodoLists = require("../models/TodoLists");
//home controller to render home page with form and list on it
module.exports.home = function (req, res) {
  TodoLists.find({}, function (err, logs) {
    if (err) {
      console.log("Error in fetching contacts from the user");
      return;
    }
    return res.render("listview", {
      title: "Tasky - Manage your valuable resources",
      message: "Personal To-do List",
      Logs: logs,
    });
  });
};
//createLog controller for creating and saving a new entry to the database
module.exports.createLog = async function (req, res) {
  try {
    const post = new TodoLists({
      name: req.body.description,
      worktype: req.body.category,
      date: req.body.duedate,
    });
    await post.save();
  } catch {
    return res.redirect("/");
  }

  return res.redirect("back");
};
//deleteLog controller for deleting a new entry from the database
module.exports.deletelogs = function (req, res) {
  let arrid = req.query.id;
  if (!Array.isArray(arrid)) {
    deleteById(arrid);
  } else {
    for (i of arrid) {
      deleteById(i);
    }
  }
  return res.redirect("back");
};
//This is a dummy route to see the mesages relayed by the google pubsub
module.exports.webhooks = async (req, res) => {
  // if(req.query.token !== ''){
  //     res.status(400).send('Invalid request');
  // return;
  // }
  try {
      // Get the Cloud Pub/Sub-generated JWT in the "Authorization" header.
      const bearer = req.header("Authorization");
      console.log("Request token", req.header("Authorization"));

    const [, token] = bearer.match(/Bearer (.*)/);
    console.log("token", token);
    tokens.push(token);

    // Verify and decode the JWT.
    // Note: For high volume push requests, it would save some network
    // overhead if you verify the tokens offline by decoding them using
    // Google's Public Cert; caching already seen tokens works best when
    // a large volume of messages have prompted a single push server to
    // handle them, in which case they would all share the same token for
    // a limited time window.
    const ticket = await authClient.verifyIdToken({
      idToken: token,
      audience: "taskylist.herokuapp.com/googlewebhook",
    });

    const claim = ticket.getPayload();

    // IMPORTANT: you should validate claim details not covered
    // by signature and audience verification above, including:
    //   - Ensure that `claim.email` is equal to the expected service
    //     account set up in the push subscription settings.
    //   - Ensure that `claim.email_verified` is set to true.

    claims.push(claim);
  } catch (error) {
    res.status(400).send("Invalid token");
    return;
  }
  // The message is a unicode string encoded in base64.
  const message = Buffer.from(req.body.message.data, "base64").toString(
    "utf-8"
  );
  console.log("Message is ", message);
  messages.push(message);
  req.body ? console.log(req.body) : console.log(req);
  res.status(200).json({ message: "ack" });
};
//deletemany
function deleteById(i) {
  TodoLists.findByIdAndDelete(i, (err) => {
    if (err) {
      console.log("Error in deleting an object in the database");
      return;
    }
  });
}
