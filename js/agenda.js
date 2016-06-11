console.debug('loading agenda');

function getRow(person) {
    var firstName = person[0];
    var lastName = person[1];
    var row = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>075211225</td></tr>';

}

var contacts = [
    ['Nicolae','Matei'],
    ['Pop','Matei'],
    ['Andrei' ,'x' ],
    ['Sebi', 'y' ]


];

for (var i = 0; i  <contacts; i++) {
    var person = contact
    $('#agenda tbody').append(getRow(person));
}