$( document ).ready( async function() {
    //spinner
    $('#container-table').css('display','block');  
    $(".spinner").append('<i class="fas fa-circle-notch fa-spin fa-2x"></i>');
    await getDataSenate(url);
    TableSenateHouseCongress(data);
    //spinner
    $('#table').DataTable(); 
    $('#container-table').removeClass('d-none'); 
    $(".spinner").empty(); 
});