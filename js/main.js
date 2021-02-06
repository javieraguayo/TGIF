


$(document).ready( function () {

    //llenado de tabla toma los datos del json
    var datam = data.results[0].members;
    var table ="";
    //foreach 
    var namefull ="";
    datam.forEach(element => {

    namefull = element.first_name + " " + element.last_name;

    table += ('<tr>');
    table += ('<td><a href='+ element.url +'>'+ namefull+'</a></td>');
    table += ('<td>' + element.party + '</td>');
    table += ('<td>' + element.state + '</td>');
    table += ('<td>' + element.seniority + '</td>');
    table += ('<td>' + element.votes_with_party_pct + '</td>');
    table += ('</tr>');	
    });

    $("#table-body").append(table); 
    $('#table').DataTable();
});

$(".nav a").on("click", function(){
    $(".nav li").find(".active").removeClass("active");
    $(this).parent().addClass("active");
 });



  