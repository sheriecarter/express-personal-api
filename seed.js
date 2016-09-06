// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var boutiques_list = [
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

var owners_list  [
  {
    name: "Sherie Carter"
  },
  {
    name: "Nikki Graham"
  };


  db.Boutique.remove({}, function(err, owners) {
    console.log('removed all owners');
    db.Author.create(owners_list, function(err, owners){
      if (err) {
        console.log(err);
        return;
      }
      console.log('recreated all owners');
      console.log("created", owners.length, "owners");


      db.Boutique.remove({}, function(err, boutiques){
        console.log('removed all boutiques');
        boutiques_list.forEach(function (boutiqueData) {
          var boutique = new db.Boutique({
            name: boutiqueData.name,
            owner: boutiqueData.owner,
            description: bookData.description
          });
          db.Boutique.findOne({name: boutiqueData.owner}, function (err, foundOwner) {
            console.log('found owner ' + foundOwner.name + ' for boutique ' + boutique.name);
            if (err) {
              console.log(err);
              return;
            }
            boutique.owner= foundOwner;
            boutique.save(function(err, savedBoutique){
              if (err) {
                return console.log(err);
              }
              console.log('saved ' + savedBoutiqe.name + ' by ' + foundOwner.name);
            });
          });
        });
      });

    });
  });

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
