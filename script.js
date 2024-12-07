const changePlaceButton = document.getElementById('change-place')


const itens_list = [
    Notebook = {
        name: "Notebook",
        open_door: null
    }
]

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

update_place()
console.log("You are at the ", currentPlace.name)
console.log(currentPlace.characters, "is in the scene")
changePlaceButton.addEventListener("click", update_place);
