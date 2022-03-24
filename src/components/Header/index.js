import '@components/Header/style.css'

import logo from '@images/logo.png'

const Header = () => {
    const view = `
        <header>
            <a href="#/">
                <img src=${logo} alt="">
            </a>
            <div class="search">
                <p>Search a Character &nbsp;</p>
                <input type="search" placeholder="">
                <button>Buscar</button>
            </div>
        </header>
    `
    return view;
}

export default Header;