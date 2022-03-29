import "@components/CardCharacter/style.css"

const CardCharacter = ({name, image, id}) => {
    
    const view = `
    <a href="#/character/${name.split(" ").join("-").toLowerCase()}/${id}" class="cards">
        <img src="${image}" alt="imagen de ${name}">
        <div class="character-name">
            <p>${name}</p>
        </div>
    </a>
    `
    return view;

}

export default CardCharacter;