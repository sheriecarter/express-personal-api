var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BoutiqueSchema = new Schema({
  name: String,
  owner: String,
  description: String
});

var Boutique = mongoose.model('Boutique', BoutiqueSchema);

module.exports = Boutique;
