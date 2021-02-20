$( document ).ready( async function() {
    //spinner
    $(".spinner").append('<i class="fas fa-circle-notch fa-spin fa-2x"></i>');
    await getDataHouse(url);
    TableSenateHouseCongress(data);
    new Vue({
        el : "#app",
        data : {
            dataHouse : data,
        }
    })
    //spinner
    $('#table').DataTable(); 
    $('#container-table').removeClass('d-none'); 
    $(".spinner").empty(); 
});
// Definir un nuevo componente 
Vue.component('title-footer', {
    template: '<h6>@2020 TGIF | All Rights Reserved</h6>'
})



