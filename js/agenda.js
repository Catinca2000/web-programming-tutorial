console.debug('loading agenda');

function getRow(name) {
    var row = '<tr><td>' + name + '</td><td>Francesca</td><td>075211225</td></tr>';

}

var contacts = [
    'Matei',
    'Andrei',
    'Sebi',
    'Oana',
    'Ema',
    'Manu'

];

for (var i = 0; i  <contacts; i++) {
    $('#agenda tbody').append(getRow(contacts[i]));
}