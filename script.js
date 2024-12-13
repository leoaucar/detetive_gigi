const changePlaceButton = document.getElementById('change-place')
const statsButton = document.getElementById('stats-button')
let stats_screen_on = false;


const itens_list = [
    Notebook = {
        name: "Notebook",
        open_door: null,
        on_pick:null
    },
    Catnip = {
        name: "Catnip",
        open_door: null,
        on_pick: {stealth: 10}
    },
    Churu = {
        name: "Churu",
        open_door: null,
        on_pick: {total_xp: 100}
    }
]

let character_stats = {
    cuteness: 0,
    intelligence: 0,
    stealth: 0,
    purr: 0,
    total_xp: 0,
    spent_xp: 0,
}
let free_xp = character_stats['total_xp'] - character_stats['spent_xp']
let character_inventory = []


const character_list = [
    {
        name: "Grafite",
        has_item: itens_list[0],
        need_item: null,
        quest: null,
        place: "policeStation"
    }
]

const places = [
    {
        name:"Office",
        characters: "Gigi",
        itens: null,
        description:"Crime never sleeps. We do.",
        context_image: 'images\\gigi_capa.jpg'
    },
    {
        name: "Police Station",
        characters: character_list[0].name,
        itens: itens_list[0],
        description: "Just an ordinary police station.",
        context_image: 'images\\grafite_police_station.jpg'
    },
    {
        name:"Granny house",
        characters: "None alive",
        itens: null,
        description:"Granny's house smelt like catnip.",
        context_image: "images\\nanquim_granny.jpg"
    },

]
let currentPlace = places[0]

function update_place(){
    placeIndex = Number(document.getElementById('places-dropdown').value);
    currentPlace = places[placeIndex]
    const currentPlaceText = currentPlace.name
    const placeDescription = currentPlace.description
    const characters = currentPlace.characters
    document.getElementById('current-place-text').textContent = currentPlaceText
    document.getElementById('place-description').textContent = `${placeDescription} ${characters} is here.`
    document.getElementById('context-image').src = currentPlace.context_image
    
}

function list_characters(place){
}

function show_stats_screen(){
    if(stats_screen_on == false){
        update_stats_screen()
        document.getElementById('stats-screen').style.display = 'block';
        stats_screen_on = true;
    } else{
        document.getElementById('stats-screen').style.display = 'none';
        stats_screen_on = false;
    }
}

function update_stats_screen(){
    document.getElementById('XP-text').innerText = free_xp
    document.getElementById('Cuteness-text').innerText = character_stats['cuteness']
    document.getElementById('Intelligence-text').innerText = character_stats['intelligence']
    document.getElementById('Stealth-text').innerText = character_stats['stealth']
    document.getElementById('Purr-text').innerText = character_stats['purr']
}


update_place()
console.log("You are at the ", currentPlace.name);
console.log(currentPlace.characters, "is in the scene");
changePlaceButton.addEventListener("click", update_place);
statsButton.addEventListener("click",show_stats_screen);
