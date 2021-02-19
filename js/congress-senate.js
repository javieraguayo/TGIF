$( document ).ready( async function() {
    await getDataSenate(url);
    TableSenateHouseCongress(data);
});