$( document ).ready( async function() {
    await getDataSenate(url);
    numeroReps(data);
    porcentajeVotosPartido(data);
    construirTablaEG(objestadisticas.estadisticas);
    construirTablaTopAttendance(data);
    construirTablaBottomAttendance(data);

});