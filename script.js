$(document).ready(function() {

  // Oggetto che descrive uno studente
  var student = {
    'name': 'Alex',
    'surname': 'Anderson',
    'age': '20'
  }
    // Stampo a video l'oggetto utilizzando un ciclo for con in
    for (var key in student) {
      console.log('Key: ' + key + ', value: ' + student[key]);
    };


  // Array di oggetti che descrivono piu studenti
  var students = [
    {
      name: 'Alex',
      surname: 'Anderson',
      age: 20
    },

    {
      name: 'Tom',
      surname: 'Brady',
      age: 25
    },

    {
      name: 'Joe',
      surname: 'Black',
      age: 30
    },

    {
      name: 'Matt',
      surname: 'Jackson',
      age: 35
    },

    {
      name: 'Robert',
      surname: 'Pattinson',
      age: 40
    }
  ];

    // Stampo a video gli array di oggetti utilizzando un ciclo for standard
    for (var i = 0; i < students.length; i++) {
      console.log(students[i]);
    };


  // Chiedo all'utente di inserire i dati di un nuovo studente
  var studentName = prompt('Inserisci nome studente');
  var studentSurname = prompt('Inserisci cognome studente');
  var studentAge = parseInt(prompt('Inserisci età studente'));

  // Creo l'oggetto in cui si inseriranno i nuovi studenti aggiunti
  var addStudent = {
    'name': studentName,
    'surname': studentSurname,
    'age': studentAge
  }

  // Pusho lo studente nel mio array precedente in modo da aggiungerlo
  students.push(addStudent);

  console.log(students);
});
