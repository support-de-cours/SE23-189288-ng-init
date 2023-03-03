let url = "https://pokeapi.co/api/v2/pokemon/ditto";

(async function(){

    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

})()


fetch(url).then()

console.log();