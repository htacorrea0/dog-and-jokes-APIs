const url = 'https://dog.ceo/api/breeds/image/random';

async function dog(){
    try{
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('dogPic').src = data.message;
    }catch(error){
        console.error();
    }
}

setInterval(dog,3000);