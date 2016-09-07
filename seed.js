// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');
var mongoose = require('mongoose');

var boutiquesData = [
  {
    name: "SherieNicole",
    owner: "Sherie Carter",
    description: "Casual Wear"
  },
  {
    name: "NikkiGraham",
    owner: "Nikki Graham",
    description: "swimsuit coverups"
  }
];

var boutiques = boutiquesData.map(function (boutique) {
  var boutique = new db.Boutique({
    name: boutique.name,
    owner: boutique.owner,
    description: boutique.description
  });
  return boutique;
});

db.Boutique.remove({}, function(err, owners) {
  console.log('removed all owners');
  db.Boutique.create(boutiques, function(err, owners){
    if (err) {
      console.log(err);
      return;
    }
    console.log("\ncreated", boutiques);
    mongoose.connection.close()
  });
});
