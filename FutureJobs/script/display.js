
fetch('/jobs')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
            // add by Mouafak
    let num = 10 ;
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length-(data.length - num); i++) {
        var divColSm6 = document.createElement("div");
        var divCard = document.createElement("div");
        var divCardBody = document.createElement("div")
        divColSm6.classList = 'col-sm-6';
        divCard.classList = "card";
        divCardBody.classList = "card-body";
        divCardBody.innerHTML = '<h2 class="card-title">'+'<br />'+ data[i].libelle+'</h2><p class="card-text"> this is the para test</p>         <a href="#" class="btn btn-primary">consulter l\'offre</a>' ; //data[i].code+
        mainContainer.appendChild(divColSm6);
        divColSm6.appendChild(divCard);
        divCard.appendChild(divCardBody);
    }
}
