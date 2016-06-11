console.debug('loading agenda');

function getRow(person) {
    var firstName = person.firstName ;
    var lastName = person.lastName ;
    var row = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>075211225</td></tr>';
    return row;
}

var contacts = [

    {firstName: 'Vlad', lastName: 'Pop'},
    {firstName: 'Simona', lastName: 'Pop'},
    {firstName: 'Ionela', lastName: 'Pop'},
    {firstName: 'Gina', lastName: 'Pop'},
    {firstName: 'Andra', lastName: 'Pop'},
    {firstName: 'Ema', lastName: 'Pop'},

];

for (var i = 0; i  <contacts.length; i++) {
    var person = contacts[i];
    $('#agenda tbody').append(getRow(person));
}