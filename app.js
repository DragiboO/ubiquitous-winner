let btn_switch =document.querySelector(".switch")
let btn_more = document.querySelector(".more")
let stats = document.querySelector(".stats")
let btn_next = document.querySelector(".next")
let btn_previous = document.querySelector(".previous")
let btn_random = document.querySelector(".random")
let type = document.querySelectorAll(".type")
let id = 1

btn_more.addEventListener("click", function() {
    stats.classList.toggle("display");
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fetch_pokemon() {

    if (id == 899) {
        id = 1;
    } if (id == 0) {
        id = 898;
    }

    url = "https://pokeapi.co/api/v2/pokemon/" + id;

    fetch(url).then((response) => response.json()).then(function(data) {
        
        Name = document.querySelector(".pokename");
        Name.innerText = capitalizeFirstLetter(data.name) + " #" + data.id;

        Sprite = document.querySelector(".pokeimg");
        Sprite.setAttribute("src", data.sprites.front_default);

        ShinySprite = document.querySelector(".pokeshinyimg");
        ShinySprite.setAttribute("src", data.sprites.front_shiny);

        Type0 = document.querySelector(".type0");
        Type0.innerText = capitalizeFirstLetter(data.types[0].type.name);

        if (data.types[1]) {   
            Type1 = document.querySelector(".type1");
            Type1.innerText = capitalizeFirstLetter(data.types[1].type.name);
        } else {
            Type1.innerText = "";
        }

        if (data.types[0].type.name == "grass") {
            Type0.style.backgroundColor = "#78c850";
        } if (data.types[0].type.name == "fire") {
            Type0.style.backgroundColor = "#f08030";
        } if (data.types[0].type.name == "water") {
            Type0.style.backgroundColor = "#6890f0";
        } if (data.types[0].type.name == "bug") {
            Type0.style.backgroundColor = "#a8b820";
        } if (data.types[0].type.name == "normal") {
            Type0.style.backgroundColor = "#a8a878";
        } if (data.types[0].type.name == "electric") {
            Type0.style.backgroundColor = "#f8d030";
        } if (data.types[0].type.name == "ice") {
            Type0.style.backgroundColor = "#98d8d8";
        } if (data.types[0].type.name == "fighting") {
            Type0.style.backgroundColor = "#c03028";
        } if (data.types[0].type.name == "poison") {
            Type0.style.backgroundColor = "#a040a0";
        } if (data.types[0].type.name == "ground") {
            Type0.style.backgroundColor = "#e0c068";
        } if (data.types[0].type.name == "flying") {
            Type0.style.backgroundColor = "#a890f0";
        } if (data.types[0].type.name == "psychic") {
            Type0.style.backgroundColor = "#f85888";
        } if (data.types[0].type.name == "rock") {
            Type0.style.backgroundColor = "#a18f4f";
        } if (data.types[0].type.name == "ghost") {
            Type0.style.backgroundColor = "#705898";
        } if (data.types[0].type.name == "dark") {
            Type0.style.backgroundColor = "#705848";
        } if (data.types[0].type.name == "dragon") {
            Type0.style.backgroundColor = "#7038f8";
        } if (data.types[0].type.name == "steel") {
            Type0.style.backgroundColor = "#b8b8d0";
        } if (data.types[0].type.name == "fairy") {
            Type0.style.backgroundColor = "#f0b6bc";
        } if (data.types[0].type.name == "") {
            Type0.style.backgroundColor = "";
        } 

        if (data.types[1]) {
            if (data.types[1].type.name == "grass") {
                Type1.style.backgroundColor = "#78c850";
            } if (data.types[1].type.name == "fire") {
                Type1.style.backgroundColor = "#f08030";
            } if (data.types[1].type.name == "water") {
                Type1.style.backgroundColor = "#6890f0";
            } if (data.types[1].type.name == "bug") {
                Type1.style.backgroundColor = "#a8b820";
            } if (data.types[1].type.name == "normal") {
                Type1.style.backgroundColor = "#a8a878";
            } if (data.types[1].type.name == "electric") {
                Type1.style.backgroundColor = "#f8d030";
            } if (data.types[1].type.name == "ice") {
                Type1.style.backgroundColor = "#98d8d8";
            } if (data.types[1].type.name == "fighting") {
                Type1.style.backgroundColor = "#c03028";
            } if (data.types[1].type.name == "poison") {
                Type1.style.backgroundColor = "#a040a0";
            } if (data.types[1].type.name == "ground") {
                Type1.style.backgroundColor = "#e0c068";
            } if (data.types[1].type.name == "flying") {
                Type1.style.backgroundColor = "#a890f0";
            } if (data.types[1].type.name == "psychic") {
                Type1.style.backgroundColor = "#f85888";
            } if (data.types[1].type.name == "rock") {
                Type1.style.backgroundColor = "#a18f4f";
            } if (data.types[1].type.name == "ghost") {
                Type1.style.backgroundColor = "#705898";
            } if (data.types[1].type.name == "dark") {
                Type1.style.backgroundColor = "#705848";
            } if (data.types[1].type.name == "dragon") {
                Type1.style.backgroundColor = "#7038f8";
            } if (data.types[1].type.name == "steel") {
                Type1.style.backgroundColor = "#b8b8d0";
            } if (data.types[1].type.name == "fairy") {
                Type1.style.backgroundColor = "#f0b6bc";
            }
        } else {
            Type1.style.backgroundColor = "";
        }

        Weight = document.querySelector(".weight");
        Weight.innerText = data.weight / 10;

        Height = document.querySelector(".height");
        Height.innerText = data.height / 10;

        Hp = document.querySelector(".hp");
        Hp.innerText = data.stats[0].base_stat;

        Atk = document.querySelector(".atk");
        Atk.innerText = data.stats[1].base_stat;

        Def = document.querySelector(".def");
        Def.innerText = data.stats[2].base_stat;

        Spatk = document.querySelector(".spatk");
        Spatk.innerText = data.stats[3].base_stat;

        Spdef = document.querySelector(".spdef");
        Spdef.innerText = data.stats[4].base_stat;

        Speed = document.querySelector(".speed");
        Speed.innerText = data.stats[5].base_stat;

    })
}

fetch_pokemon();

btn_previous.addEventListener("click", function(){
    id = id - 1;
    fetch_pokemon();
})

btn_next.addEventListener("click", function(){
    id = id + 1;
    fetch_pokemon();
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

btn_random.addEventListener("click", function() {
    id = getRandomInt(898);
    fetch_pokemon();
})

swap = 0;

btn_switch.addEventListener("click", function() {
    document.querySelector(".pokeimg").classList.toggle("display");
    document.querySelector(".pokeshinyimg").classList.toggle("display");
    swap = swap + 1;
    if (swap % 2 == 0) {
        document.querySelector(".pokename").style.color = "#000000";
    } else {
        document.querySelector(".pokename").style.color = "#e0ae0b";
    }
})