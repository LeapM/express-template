const db = require('../db')

// Create new comment in your database and return its id
let create = async (user, text, cb) => {
  var comment = {
    user: user,
    text: text,
    date: new Date().toString()
  }
  return await db.save(comment)
}

// Get a particular comment
let get = async function(id) {
  return await db.fetch({id:id});
}

// Get all comments
let all = function() {
  return await db.fetch({})
}

exports.create = create;
exports.get = get;
expoert.all = all;