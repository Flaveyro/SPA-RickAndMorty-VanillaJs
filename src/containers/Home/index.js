import getData from "@utils/getData"
import CardCharacter from "@components/CardCharacter";
import '@containers/Home/style.css'

const Home = async () => {
    const main = document.getElementsByTagName('main')[0];
    main.classList = 'characteres-list_container';
    
    
    /////////////////////botones/////////////////
    // let botonSumar =  document.getElementById('botonClickPlus');
    // let contador = 1;
    // console.log(botonSumar);
    // botonSumar.addEventListener('click', () => {
    //     contador++;
    //     console.log('click')
    // })

    // console.log(contador);
    //////////////////////////////////////////
    
    

    const response = await getData(`https://rickandmortyapi.com/api/character/`);
    console.log(response);
    console.log(response.results);
    
    main.innerHTML = `
    <h2>Home</h2>
        <section class="characteres-list">
            ${response.results.map((item) => CardCharacter(item)).join('')}
        </section>
    `
}

export default Home;


