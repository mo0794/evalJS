// Pour integrer l API 

// 1)Partie USERS

// Pour obtenir un User du API
async function getRandomUser(){
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0]; // pour cibler l'index[0] de notre .results (c'est ici où nous trouvons tous les informations dont nous avons besoin)
    displayUser(user);
    // console.log(data);
}
getRandomUser();

// Pour montrer l'user dans notre site
function displayUser(user){

    //recuperer les ID de notre html et les stocker dans des const.
    const nameUser = document.querySelector("#name");
    const nameText = document.querySelector("#user_name");
    const city = document.querySelector("#city");
    const country = document.querySelector("#country");
    const age = document.querySelector("#age");
    const mail = document.querySelector("#mail");
    const tel = document.querySelector("#tel");
    const photo = document.querySelector("#photo_user");

    //afficher le resultat dans notre HTML
    nameUser.textContent = `${user.name.first} ${user.name.last}`;
    nameText.textContent = `${user.name.first}`;
    city.textContent= `${user.location.city}`;
    country.textContent= `${user.location.country}`;
    age.textContent= `${user.dob.age}`;
    mail.textContent= `${user.email}`;
    tel.textContent= `${user.cell}`;
    photo.setAttribute('src',`${user.picture.medium}`)
    
    //cette f : pour definir si c'est male/female afin d'adapter notre texte 
    function gender(){

        const job = document.querySelector("#job");
        const based = document.querySelector("#based");

        if(user.gender=="male"){
            job.textContent ="Developpeur";
            based.textContent ="basé";
        }
        else{
            job.textContent ="Developpeuse";
            based.textContent ="basée";
        }
    }
    gender();
};
//--------------------------------------------------------------------------------------------------------------

// 2) Partie Avis clients 
const fiveStar = [];

async function getComment(){

    const response = await fetch('https://www.spreadshirt.fr/shopData/reviews?productTypeId=812&locale=fr_FR');
    const data =await response.json();
    const commentaire = data.comments // pour filtrer que les commentaires
    const fiveStar = commentaire.filter(comment => comment.rating ==="5"); // pour filtrer les commentaires avec 5*****
    console.log(fiveStar);
    displayRandomComment(fiveStar);
};
getComment();

function displayRandomComment(fiveStar) {

    //recuperer les ID de notre html et les stocker dans des const.

    const avis1 = document.getElementById("avisUser1");
    const avis2 = document.getElementById("avisUser2");
    const avis3 = document.getElementById("avisUser3");

    if (fiveStar.length > 0){
        
        //pour obtenir random Index
        const randomIndex = Math.floor(Math.random() * fiveStar.length);
        // pour obtenir random comment
        const randomComment = fiveStar[randomIndex];
        console.log(randomComment);
        //ajouter le commentaire a notre site
        avis1.textContent = `${randomComment.comment}`;
        avis2.textContent = `${randomComment.comment}`;
        avis3.textContent = `${randomComment.comment}`;
    }
    
}
displayRandomComment();



