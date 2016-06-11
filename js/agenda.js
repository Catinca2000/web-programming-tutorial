console.debug('loading agenda');

function getRow(person) {
    var firstName = person[0];
    var lastName = person[1];
    var row = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>075211225</td></tr>';
    return row;
}

var contacts = [
    ['Nicolae','Matei'],
    ['Pop','Matei'],
    ['Andrei' ,'XX' ],
    ['Sebi', 'YY' ]
    ['Gina', 'ZZ' ]


];

for (var i = 0; i  <contacts.length; i++) {
    var person = contacts[i];
    $('#agenda tbody').append(getRow(person));
}