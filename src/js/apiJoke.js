document.getElementById("btn").addEventListener("click", function(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("joke").textContent = 
        data.setup + "" + data.punchline;
    })
    .catch((error) => {
        console.log("Error fetching joke: ", error);
        document.getElementById("joke").textContent = "Failed to fetch joke.";
    });
});