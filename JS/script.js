// Conectando a pokeapi 

// VARIAVEIS GLOBAIS



const pokemonName = document.querySelector(".pokemon_name")
const pokemonNumber = document.querySelector(".pokemon_number")
const pokemonImg = document.querySelector(".pokemon_image")
const form = document.querySelector(".form")
const input = document.querySelector(".input_search")
const buttonNext = document.querySelector(".btn-next")
const buttonPrev = document.querySelector(".btn-prev")



const fetchPokemon = async (pokemon)=>{

    const APIresponse =   await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`) 


    if (APIresponse.status===200) {
        const data = await APIresponse.json();
        return data;
    }
    
}

// Renderizar o pokemon 

const renderPokemon = async (pokemon) =>{

    pokemonName.innerHTML = "Carregando..."
    pokemonNumber.innerHTML = ""
    

    const data = await fetchPokemon (pokemon)
        console.log (data)

        if (data) { 
         pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImg.src = data['sprites'] ['versions']['generation-v'] ['black-white']['animated']['front_default']
        input.value = "";  
        searchPokemon =  data.id
        } 
        
        else {   

            pokemonImg.src = "https://i.pinimg.com/564x/e2/ea/81/e2ea81221fe05e02ea2e719aff58c82a.jpg"
            pokemonName.innerHTML = "Não encontrado :/"
        }

    

};

form.addEventListener("submit",(event)=>{

    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase());
    

} )


// EVENTOS DOS BOTÕES PREV E NEXT

let searchPokemon = 0;

buttonPrev.addEventListener ("click", () => {

    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon) 
    }
}) 

buttonNext.addEventListener ("click", () => {

    searchPokemon += 1;

    renderPokemon(searchPokemon)   



});

renderPokemon(1)



