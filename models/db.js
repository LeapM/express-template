const MongoClient = require('mongodb').MongoClient

let state = {
  db: null,
}

let connect = async function(url) {
  if (state.db) return done()
  state.db = await MongoClient.connect(url);
  return state.db;
}

let get = async function() {
    if(state.db) return state.db;
    else return await exports.connect();
}

let close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}

exports.connect = connect;
exports.get = get;
exports.close = close;