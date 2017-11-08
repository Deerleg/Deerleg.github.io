var pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Venusaur-Mega", "Charmander", "Charmeleon", "Charizard", "Charizard-Mega-X", "Charizard-Mega-Y", "Squirtle", "Wartortle", "Blastoise", "Blastoise-Mega", "Caterpie", "Metapod", "Butterfree", 
                "Weedle", "Kakuna", "Beedrill", "Beedrill-Mega", "Pidgey", "Pidgeotto", "Pidgeot", "Pidgeot-Mega", "Rattata", "Rattata-Alolan", "Raticate", "Raticate-Alolan", "Spearow", "Fearow", "Ekans", "Arbok",
                "Pikachu", "Raichu", "Raichu-Alolan", "Sandshrew", "Sandshrew-Alolan", "Sandslash", "Sandslash-Alolan", "Nidoran-F", "Nidorina", "Nidoqueen", "Nidoran-M", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix",
                "Vulpix-Alolan", "Ninetales", "Ninetales-Alolan", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish",];
var type1 = ["grass", "grass", "grass", "grass", "fire", "fire", "fire", "fire", "fire", "water", "water", "water", "water", "bug", "bug", "bug",
                "bug", "bug", "bug", "bug", "normal", "normal", "normal", "normal", "normal", "dark", "normal", "dark", "normal", "normal", "poison", "poison",
                "electric", "electric", "electric", "ground", "ice", "ground", "ice", "poison", "poison", "poison", "poison", "poison", "poison", "fairy", "fairy", "fire",
                "ice", "fire", "ice", "normal", "normal", "poison", "poison", "grass",];
var type2 = ["poison", "poison", "poison", "poison", null, null, "flying", "dragon", "flying", null, null, null, null, null, null, "flying",
                "poison", "poison", "poison", "poison", "flying", "flying", "flying", "flying", null, "normal", null, "normal", "flying", "flying", null, null,
                null, null, "psychic", null, "steel", null, "steel", null, null, "ground", null, null, "ground", null, null, null,
                null, null, "fairy", "fairy", "fairy", "flying", "flying", "poison",];
var def = [49, 63, 83, 123, 43, 58, 78, 111, 78, 65, 80, 100, 120, 35, 55, 50, 30, 50, 40, 40, 40, 55, 75, 80, 35, 35,
            60, 70, 30, 65, 44, 69, 40, 55, 50, 85, 90, 110, 120, 52, 67, 87, 40, 57, 77, 48, 73, 40, 40, 75, 75, 20,
            45, 35, 70, 55];
var spd = [65, 80, 100, 120, 50, 65, 85, 85, 115, 64, 80, 105, 115, 20, 25, 80, 20, 25, 80, 80, 35, 50, 70, 80, 35, 35,
            70, 80, 31, 61, 54, 79, 50, 80, 85, 30, 35, 55, 65, 40, 55, 85, 40, 55, 75, 65, 90, 65, 65, 100, 100, 25,
            50, 40, 75, 65];
            

let rand = Math.floor(Math.random()*pokemon.length);
if (pokemon.length === def.length && pokemon.length === spd.length && pokemon.length === type1.length && pokemon.length === type2. length){
    if (type2 [rand] === null){
        document.getElementById("demo").innerHTML = `The pokemon ${pokemon [rand]} is a ${type1 [rand]}-type that has a top defense of ${def [rand]} and a top special defense of ${spd [rand]}.`;
    } else {
        document.getElementById("demo").innerHTML = `The pokemon ${pokemon [rand]} is a ${type1 [rand]}-${type2 [rand]} type that has a top defense of ${def [rand]} and a top special defense of ${spd [rand]}.`;
    }
} else {
    document.getElementById("demo").innerHTML = `Oops! Pokemon: ${pokemon.length} def: ${def.length} spd: ${spd.length}`;
}

document.getElementById("image").src = `https://img.pokemondb.net/artwork/${pokemon[rand].toLowerCase()}.jpg`;