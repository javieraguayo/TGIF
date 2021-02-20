$( document ).ready( async function() {
    //spinner
    $(".spinner").append('<i class="fas fa-circle-notch fa-spin fa-2x"></i>');
    await getDataHouse(url);
    numeroReps(data);
    porcentajeVotosPartido(data);
    construirTablaEG(objestadisticas.estadisticas);
    construirTablaBottomParty(data);
    construirTablaTopParty(data);

    $('.table-bordered').removeClass('d-none'); 
    $(".spinner").empty();
});


