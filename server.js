// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "I created this website to show you my favorite boutiques!",
    documentationUrl: "https://github.com/sheriecarter/express-personal-api/blob/master/README.md", // CHANGE ME
    baseUrl: "https://boiling-sea-29554.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/boutiques ", description: "All Boutiques"}, // CHANGE ME
      {method: "GET", path: "/api/boutiques/:id ", description: "Boutique"}, // CHANGE ME
      {method: "PUT", path: "/api/boutiques/:id ", description: ""}, // CHANGE ME
      {method: "POST", path: "/api/boutiques ", description: "My Favorite Boutiques"} // CHANGE ME
    ]
  })
});


app.get('/api/profile', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    name: Sherie Carter,
    githubLink: "https://github.com/sheriecarter",
    githubProfileImage:"https://avatars1.githubusercontent.com/u/17553794?v=3&s=460",
    personalSiteLink: "https://sheriecarter.github.io/",
    currentCity: "San Francisco",
    pets: [{name: "Gotti", type: "Dog", breed: "Bischon Frise"}, {name: "Irv", type: "Cat", breed: "Bischon Frise"}]


  })
});
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
