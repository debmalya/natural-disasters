const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/disaster';


MongoClient.connect(url, (err, db) => {
  assert.equal(err, null)


    db.collection('hurricanes').drop((err, reply) => {
      assert.equal(err, null)

      console.log('Dropped hurricanes collection')
      db.close()
    })
})