import { getCharacters } from "./getCharacters";
import { characterCards } from "./templates";


export const  renderCharacters = async () => {
    
    const container = document.getElementById('shows-character');

    const characters = await getCharacters();

    container.innerHTML = characterCards(characters);    


}; 
