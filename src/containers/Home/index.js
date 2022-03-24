import getData from "@utils/getData"

import '@containers/Home/style.css'

const Home = async () => {
    const main = document.getElementsByTagName('main')[0];
    const response = await getData('https://rickandmortyapi.com/api/character/1');
    const {
        image,
        name,
        id,
        species,
        gender,
        location,
    } = response;
    console.log(response);

    main.innerHTML = `
    <main>
        <nav>
            <ul>
                <li>
                    <a href="#/">Home</a>
                </li>
                <li>
                    <a href="#/main">Main</a>
                </li>
                <li>
                    <a href="#/about">About</a>
                </li>
            </ul>
        </nav>
        <div class="mainImage">
            <img src="${image}" alt="">
        </div>
        <section class="profile">
            <div class="name">
                <h2>${name} </h2>
                <!-- <h3>&nbsp; Rick</h3> -->
            </div>
            <div class="id">
                <h4>${id} </h4>
                <!-- <h3>&nbsp; 325</h3> -->
            </div>
            <div class="specie">
                <h4>${species} </h4>
                <!-- <h3>&nbsp; Human</h3> -->
            </div>
            <div class="gender">
                <h4>${gender} </h4>
                <!-- <h3>&nbsp; Male</h3> -->
            </div>
            <div class="location">
                <h4>${location.name} </h4>
                <!-- <h3>&nbsp; Earth</h3> -->
            </div>
        </section>
        <section class="buttons">
            <button>Prev</button>
            <button>Next</button>
        </section>
    </main>`
    
}

export default Home;