import '@components/Header/style.css'

const Header = () => {
    const view = `
        <header>
            <h1>Hola Mundo, dentro del Header</h1>
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
        </header>
    `
    return view;
}

export default Header;