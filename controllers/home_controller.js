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
  console.log(req.headers);
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
