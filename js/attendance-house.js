$( document ).ready( async function() {
    await getDataHouse(url);
    numeroReps(data);
    porcentajeVotosPartido(data);
    construirTablaEG(objestadisticas.estadisticas);
    construirTablaTopAttendance(data);
    construirTablaBottomAttendance(data);
});