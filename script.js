var pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Venusaur-Mega", "Charmander", "Charmeleon", "Charizard", "Charizard-Mega-X", 
                "Charizard-Mega-Y", "Squirtle", "Wartortle", "Blastoise", "Blastoise-Mega", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna",
                "Beedrill", "Beedrill-Mega", "Pidgey", "Pidgeotto", "Pidgeot", "Pidgeot-Mega"];
var def = [49, 63, 83, 123, 43, 58, 78, 111, 78, 65, 80, 100, 120, 35, 55, 50, 30, 50, 40, 40, 40, 55, 75, 80];
var spd = [65, 80, 100, 120, 50, 65, 85, 85, 115, 64, 80, 105, 115, 20, 25, 80, 20, 25, 80, 80, 35, 50, 70, 80];
console.log(pokemon.length);
if (pokemon.length === def.length && pokemon.length === spd.length){
    let rand = Math.floor(Math.random()*pokemon.length);
    console.log (rand);
    document.getElementById("demo").innerHTML = `The pokemon ${pokemon [rand]} has a base defense of ${def [rand]} and a base special defense of ${spd [rand]}.`;
} else {
    document.getElementById("demo").innerHTML = `Oops! Pokemon: ${pokemon.length} def: ${def.length} spd: ${spd.length}`;
}

