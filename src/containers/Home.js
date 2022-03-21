import getData from "@utils/getData"

import './style.css'

const fetchData = async () => {
    const response = await getData('https://rickandmortyapi.com/api/character/1');
    console.log(response);
    // console.log(response.results[0].name)
    // console.log(name)
    // console.log(response.info.count);
    
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += `
        <div class="mainImage">
            <img src="${response.image}" alt="">
        </div>
        <section class="profile">
            <div class="name">
                <h2>${response.name} </h2>
                <!-- <h3>&nbsp; Rick</h3> -->
            </div>
            <div class="id">
                <h4>${response.id} </h4>
                <!-- <h3>&nbsp; 325</h3> -->
            </div>
            <div class="specie">
                <h4>${response.species} </h4>
                <!-- <h3>&nbsp; Human</h3> -->
            </div>
            <div class="gender">
                <h4>${response.gender} </h4>
                <!-- <h3>&nbsp; Male</h3> -->
            </div>
            <div class="location">
                <h4>${response.location.name} </h4>
                <!-- <h3>&nbsp; Earth</h3> -->
            </div>
        </section>
        <section class="buttons">
            <button>Prev</button>
            <button>Next</button>
        </section>
    `
    
}

const Home = () => {
    fetchData()

    const view = `
    <main>
        
    </main>
    `
    return view
}

export default Home;