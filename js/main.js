//llenado de tabla 
var datasenators = data.results[0].members;
var table ="";
datasenators.forEach(element => {

table += ('<tr>');
table += ('<td>' + element.first_name +''+ element.last_name+ '</td>');
table += ('<td>' + element.party + '</td>');
table += ('<td>' + element.state + '</td>');
table += ('<td>' + element.seniority + '</td>');
table += ('<td>' + element.votes_with_party_pct + '</td>');
table += ('</tr>');	
});

$("#table-body").append(table); 


$(document).ready( function () {
    $('#table').DataTable();
} );


  