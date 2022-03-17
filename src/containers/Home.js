import getData from "@utils/getData"

const Home = async () => {
    // const n = superHeroes['members'][1]['powers'][2]
    const characters = await getData('https://rickandmortyapi.com/api/character/')
    console.log(characters.results[0].name)
    const view = `
        <main><h2>Home${characters}</h2></main>
    `
    
    return view
}

export default Home;