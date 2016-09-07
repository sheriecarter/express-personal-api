

console.log("Sanity Check: JS is working!");
var template;
var $boutiquesList;
var allBoutiques = [];

$(document).ready(function(){

  $boutiquesList = $('#boutiqueTarget');

  // compile handlebars template

  var source = $('#boutiques-template').html();
  template = Handlebars.compile(source);



  $.ajax({
    method: 'GET',
    url: '/api/boutiques',
    success: handleSuccess,
    error: handleError
  });
// Profile function
$.ajax({
  method: 'GET',
  url: '/api/profile',
  success: makeProfile,
});

function makeProfile(json){
  var   source = $('#profile-template').html();
  console.log(source);
  var  template = Handlebars.compile(source);

  var profilehtml = template({
    name: json.name,
    githubLink: json.githubLink,
    githubProfileImage: json.githubProfileImage,
    personalSiteLink: json.personalSiteLink,
    currentCity: json.currentCity
  });


  $('#yourProfile').append(profilehtml);

}



  $('#newBoutiqueForm').on('submit', function(e) {
    e.preventDefault();
    console.log('new boutique serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/boutiques',
      data: $(this).serializeArray(),
      success: newBoutiqueSuccess,
      error: newBoutiqueError
    });
  });

  $boutiquesList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/boutiques/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/boutiques/'+$(this).attr('data-id'),
      success: deleteBoutiqueSuccess,
      error: deleteBoutiqueError
    });
  });

});

// helper function to render all posts to view

function render () {
  $boutiquesList.empty();

  // pass `allBooks` into the template function
  var boutiquesHtml = template({ boutiques: allBoutiques });

  // append html to the view
  $boutiquesList.append(boutiquesHtml);
};

function handleSuccess(json) {
  allBoutiques = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#boutiqueTarget').text('Failed to load boutiques, is the server working?');
}

function newBoutiqueSuccess(json) {
  console.log("inside new boutique success")
  $('#newBoutiqueForm input').val('');
  allBoutiques.push(json);
  render();
}

function newBoutiqueError() {
console.log("Not Working")
}

function deleteBoutiqueSuccess(json) {

  console.log("inside delete success")
  var boutique = json;
  var boutiqueId = boutique._id;

  // find the book with the correct ID and remove it from our allBooks array
  for(var index = 0; index < allBoutiques.length; index++) {
    if(allBoutiques[index]._id === boutiqueId) {
      allBoutiques.splice(index, 1);
      break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}

function deleteBoutiqueError() {
console.log("Not Working")
}
