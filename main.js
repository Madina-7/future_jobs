
// bring in node package 'http' to listen for http requests
const express = require('express')
const app = express()
const port = 3001
const fs = require('fs')
const path = require('path')
const router = express.Router();

app.use(express.static(path.join(__dirname, '/FutureJobs')));

app.get('/', function (req, res) { 
    res.sendFile(path.resolve('FutureJobs/index.html')); 
});

app.get('/results', function (req, res) { 
    res.sendFile(path.resolve('FutureJobs/result_page.html')); 
});

app.get('/jobs', (req, res) => {
    let rawdata = fs.readFileSync('fake.json');
    let jobs = JSON.parse(rawdata);
    console.log(jobs);
    res.json(jobs);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// app.get('/test', (req, res) => {
//     let url = ' https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=partenaire';
 
// fetch('POST' +url, {
//     method: 'POST',
//     headers: {
//       "Content-type": "application/x-www-form-urlencoded;",
//     },
//     body: "grant_type=client_credentials&client_id=PAR_futurejob_136378497779aeb3f34e8ff8ed5d74105c30b4e095f3f413d51b3fe808148bd7&client_secret=493cc9870379dbf1cc17d968876623d4646d98a2a926749c92ebb1deddb8b969&scope=application_PAR_futurejob_136378497779aeb3f34e8ff8ed5d74105c30b4e095f3f413d51b3fe808148bd7"
//   })
//   .then((res)=>res.json())
//   .then(function (data) {
//     console.log('Request succeeded with JSON response', data);
//   })
//   .catch(function (error) {
//     console.log('Request failed', error);
//   });
//     res.json(jobs);
// });
