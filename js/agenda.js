console.debug('loading agenda');

function getRow(person) {
    var row = '<tr>'+
        '<td>' + person.firstName + '</td>'+
        '<td>'+ person.lastName + '</td>'+
        '</td>075211225 </td>'+
        '<td><button data-id="' + person.id+ '">x</button>'+
         '</tr>';
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
        $('#agenda tbody').append(getRow(person));
    }
}