const Character = (params) => {
    const main = document.getElementsByTagName('main')[0];
    console.log(params)
    main.innerHTML = `
        <div>
            <h2>Character ${params}</h2>
        </div>
    `
}

export default Character;