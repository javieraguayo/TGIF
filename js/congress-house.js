$( document ).ready( async function() {
    await getDataHouse(url);
    TableSenateHouseCongress(data);
});