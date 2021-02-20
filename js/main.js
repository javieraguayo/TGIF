
/* var data = response.results[0].members; */
function TableSenateHouseCongress(data) {
   
  
    //llenado de tabla toma los datos del json (tabla senate y congressmen)
    var table ="";
    //foreach 
    var namefull ="";
    data.forEach(element => {
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
    
}

function numeroReps(data) {

    let numero_d = 0;
    let numero_r = 0;
    let numero_i = 0;
    let total = 0;

    data.forEach(element => {
        if (element.party == 'D') {
            numero_d++ ;
        }else if(element.party == 'R'){
            numero_r++;
        }else{
            numero_i++;
        }  
    });

    total = numero_d + numero_r + numero_i;
    //asigno al objeto estadisticas
    objestadisticas.estadisticas[0].valor =numero_d;
    objestadisticas.estadisticas[1].valor =numero_r;
    objestadisticas.estadisticas[2].valor =numero_i;
    objestadisticas.estadisticas[3].valor =total;  
}

function porcentajeVotosPartido(data) {

    let democratasPorcent = 0;
    let republicanosPorcent = 0;
    let independientesPorcent = 0;
    let validatevotes = 0;
    let total=0;

    data.forEach(element => {
        if (element.votes_with_party_pct != undefined) {
            validatevotes = element.votes_with_party_pct;
        }

        if (element.party == 'D') {
            democratasPorcent += validatevotes / data.length;
        }else if(element.party == 'R'){
            republicanosPorcent += validatevotes / data.length;
        }else{
            independientesPorcent += validatevotes / data.length;
        }  
    });

    total = democratasPorcent + republicanosPorcent + independientesPorcent;
    //asigno al objeto estadisticas
    objestadisticas.estadisticas[0].porcentaje = democratasPorcent.toFixed(2);
    objestadisticas.estadisticas[1].porcentaje = republicanosPorcent.toFixed(2);
    objestadisticas.estadisticas[2].porcentaje = independientesPorcent.toFixed(2);
    objestadisticas.estadisticas[3].porcentaje = total.toFixed(2);  
}

function construirTablaEG(data) {
    let table ="";
    data.forEach(element => {
    
        table += ('<tr>');
        table += ('<td>'+element.clave+'</td>');
        table += ('<td>'+element.valor+'</td>');
        table += ('<td>'+element.porcentaje+'</td>');
        table += ('</tr>');	
    });
    $("#body-EGenerales").append(table);
}

function topAttendancePorcent(arr) {
    return arr.slice().sort(function(a,b) {
        return a.missed_votes_pct - b.missed_votes_pct;
    });
}

function bottomAttendancePorcent(arr) {
    return arr.slice().sort(function(a,b) {
        return b.missed_votes_pct - a.missed_votes_pct;
    });
}

function topLoyaltyPorcent(arr) {
    return arr.slice().sort(function(a,b) {
        return a.votes_against_party_pct - b.votes_against_party_pct;
    }); 
}

function bottomLoyaltyPorcent(arr) {
    return arr.slice().sort(function(a,b) {
        return b.votes_against_party_pct - a.votes_against_party_pct;
    });
}
//body-bottomattendance body-topattendance body-bottomparty body-topparty
function construirTablaBottomParty(arr) {
    
    var data = bottomLoyaltyPorcent(arr);
    var porcent = 0.1;
    let table ="";
    
    for (let index = 0; index < data.length * porcent ; index++) {
        const element = data[index];
        var num_votos = 0;
        num_votos = element.total_votes * (element.votes_with_party_pct / 100);
        table += ('<tr>');
        table += ('<td>'+ element.first_name +'</td>');
        table += ('<td>'+ Math.round(num_votos) +'</td>');
        table += ('<td>'+ element.votes_with_party_pct +'</td>');
        table += ('</tr>');	
    }

    $("#body-bottomparty").append(table);
}

function construirTablaTopParty(arr) {
    var data = topLoyaltyPorcent(arr);
    var porcent = 0.1;
    let table ="";
    
    for (let index = 0; index < data.length * porcent ; index++) {
        const element = data[index];
        var num_votos = 0;
        num_votos = element.total_votes * (element.votes_with_party_pct / 100);
        table += ('<tr>');
        table += ('<td>'+ element.first_name +'</td>');
        table += ('<td>'+ Math.round(num_votos) +'</td>');
        table += ('<td>'+ element.votes_with_party_pct +'</td>');
        table += ('</tr>');	
    }

    $("#body-topparty").append(table);
   
}

function construirTablaBottomAttendance(arr) {
    var data = bottomAttendancePorcent(arr);
    var porcent = 0.1;
    let table ="";
    
    for (let index = 0; index < data.length * porcent ; index++) {
        const element = data[index];
        table += ('<tr>');
        table += ('<td>'+element.first_name+'</td>');
        table += ('<td>'+element.missed_votes+'</td>');
        table += ('<td>'+element.missed_votes_pct+'</td>');
        table += ('</tr>');	
    }
  
    $("#body-bottomattendance").append(table);
}

function construirTablaTopAttendance(arr) {

    var data = topAttendancePorcent(arr);
    var porcent = 0.1;
    let table ="";
    
    for (let index = 0; index < data.length * porcent ; index++) {
        const element = data[index];
        table += ('<tr>');
        table += ('<td>'+element.first_name+'</td>');
        table += ('<td>'+element.missed_votes+'</td>');
        table += ('<td>'+element.missed_votes_pct+'</td>');
        table += ('</tr>');	
    }
    $("#body-topattendance").append(table);
}




