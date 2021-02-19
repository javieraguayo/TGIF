const url ="https://api.propublica.org/congress/v1/116/senate/members.json";
var data;

async function getDataSenate(url){

  data = await fetch(url,{
    method: 'GET',
    headers: {"X-API-key": "QQuFOh2qY9JwHUwfK2nglyABJtCDyySCPgH4F8uB"}
  })
  .then((response)=>response.json())
  .then((response) => {
    var data = response.results[0].members;
    return data; 
  })
  .catch(function (error) {
  console.log('Request failed', error);
  });
}