$(document).ready(function() {

  // Oggetto che descrive uno studente
  var student = {
    'name': 'Alex',
    'surname': 'Anderson',
    'age': '20'
  }
    // Stampo a video l'oggetto utilizzando un ciclo for
    for (var key in student) {
      console.log(student[key]);
    };

});
