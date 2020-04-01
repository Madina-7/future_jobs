
// bring in node package 'http' to listen for http requests
const express = require('express')
const app = express()
const port = 3001
const fs = require('fs')
const path = require('path')
const router = express.Router();
const rp = require('request-promise'); //to do HTTP request async

app.use(express.static(path.join(__dirname, '/FutureJobs')));

app.get('/', function (req, res) { 
    res.sendFile(path.resolve('FutureJobs/index.html')); 
});

app.get('/results', function (req, res) { 
    res.sendFile(path.resolve('FutureJobs/result_page.html')); 
});

app.get('/jobs', (req, response) => {


/// Here is fake data //////

    // let rawdata = fs.readFileSync('fake.json');
    // let jobs = JSON.parse(rawdata);
    // console.log(jobs);
    // res.json(jobs);

///////////////////////////


    var options = {
      method: 'POST',
      uri: 'https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=partenaire',
      body: "grant_type=client_credentials&client_id=PAR_workit_7baf0f55844af373a7f4928e0959957a5de15448e4914f495caaf3f67d32865a&client_secret=dca0e77b24c717d9d772042280090e7aecef5bf6128e2a8410d0ad42b0a2f8f5&scope=application_PAR_workit_7baf0f55844af373a7f4928e0959957a5de15448e4914f495caaf3f67d32865a%20api_offresdemploiv2%20o2dsoffre",
    
      headers: {
        "Content-type": "application/x-www-form-urlencoded;",
        },
    };
    
     // promise is async function
    rp(options)
      .then((res)=>{
        res_json = JSON.parse(res); // convert string to json
        console.log(res_json.access_token);
    
        var option2 = {
          method: 'GET',
          uri: 'https://api.emploi-store.fr/partenaire/offresdemploi/v2/referentiel/metiers',
          headers: {
            'Accept': 'application/json',
            "Authorization": 'Bearer '+ res_json.access_token,   
          },
          maxRedirects: 20,
          json: true 
        };   
        
        // send http get request 
        // put it inside the "then" function to execute after we get authorized (token)
        rp(option2)
          .then((res2)=>{
    
            console.log(res2);

            response.json(res2);

          })
          .catch(function (error) {
            // if there is an error on the GET...
            console.log('API call failed', error);
          });
        
      })
      .catch(function (error) {
        // if there is an error on the POST...
        console.log('Request failed', error);
      });
  
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



