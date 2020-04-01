var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer b2e96a82-62d3-4008-a323-97de72a40893");
myHeaders.append("Cookie", "TS01600790=01b3abf0a2c1b23cfa4a386ef7156d5f2c353d7e7d6d6a88a26b06f9334dbc9e27e36193b09b4d2229e2e50e88d4cc884eaa8629c1");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.emploi-store.fr/partenaire/offresdemploi/v2/referentiel/metiers", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));