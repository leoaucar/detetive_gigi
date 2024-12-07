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
        name:"Granny house",
        characters: null,
        itens: null,
        description:"Granny's house smelt like catnip"
    },
    {
        name: "Police Station",
        characters: character_list[0].name,
        itens: itens_list[0],
        description: "Just an ordinary police station"
    }
]
let currentPlace = places[1]

function update_place(){
    let currentPlaceText = currentPlace.description
    console.log(currentPlaceText)
    document.getElementById('current-place-text').textContent = currentPlaceText
}

function list_characters(place){
}

console.log("You are at the ", currentPlace.name)
console.log(currentPlace.characters, "is in the scene")
update_place()
