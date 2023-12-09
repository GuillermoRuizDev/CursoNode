//console.log("------------------------- Resolucion 02 -----------")
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

 async function dataPokemon(url, callback){
    let result = await fetch(url,
        {
            method: "GET",
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(json => callback(json))
            .catch(err => (err));
}

dataPokemon( url, (data)=>{ console.log(data)})