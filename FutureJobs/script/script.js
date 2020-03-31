
/**
 * Authentification pour récupérer un access token
 */

fetch('https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=partenaire', {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 
        "grant_type=client_credentials&client_id=PAR_futurjob_098bed1ac2e807766266ac805812e68dc7289ee64d1f2137614490656e30e53a&client_secret=0019f2eaffc65b6265f00552f88b3728fa5322b8b9fa12a8247df299b1edcd05&scope=api_offresdemploiv2 application_PAR_futurjob_098bed1ac2e807766266ac805812e68dc7289ee64d1f2137614490656e30e53a o2dsoffre"
})
.then(res => res.json())
.then(function(data ){
    console.log(data)
})