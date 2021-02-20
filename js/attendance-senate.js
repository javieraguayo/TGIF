$( document ).ready( async function() {
    //spinner
    $(".spinner").append('<i class="fas fa-circle-notch fa-spin fa-2x"></i>');
    await getDataSenate(url);
    numeroReps(data);
    porcentajeVotosPartido(data);
    construirTablaEG(objestadisticas.estadisticas);
    construirTablaTopAttendance(data);
    construirTablaBottomAttendance(data);
    //spinner
    $('.table-bordered').removeClass('d-none'); 
    $(".spinner").empty();

});