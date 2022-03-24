const About = () => {
    const main = document.getElementsByTagName('main')[0];
    console.log(main)
    main.innerHTML = `
        <main>
         <h2>
          About section
         </h2>
         <nav>
            <ul>
            <li>
                <a href="#/">Home</a>
            </li>
            </ul>
            </nav>
        </main>
    `

    
}

export default About;