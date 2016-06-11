console.debug('loading agenda');

function getRow(person) {
    var firstName = person.firstName ;
    var lastName = person.lastName ;
    var row = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>075211225</td></tr>';
    return row;
}

$.ajax({
    url: "js/mocks/load-contacts.json"
   }).done(function(result) {
    console.debug  ('3) ajax done', result) ;
    showContacts(result);
});

console.debug('2) after ajax');

function showContacts(contacts){
    for (var i = 0; i  <contacts.length; i++) {
    var person = contacts[i];
    $('#agenda tbody').append(getRow(person));}

}