import '@containers/err404/style.css';

const err404 = () => {
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = `
    <main>
        <h1>404...</h1>    
        <h2>Oh! You're Lost</h2>
        <a href="#/">
            <button class="btn">Home</button>
        </a>
    </main>
    `
    
}

export default err404;