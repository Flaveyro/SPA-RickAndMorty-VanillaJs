import Header from "@components/Header"
import Footer from "@components/Footer"

const Layout = (props, params) => {
    // console.log(params)
    const header = document.getElementsByTagName('header')[0];
    const footer = document.getElementsByTagName('footer')[0];
    header.innerHTML = Header()
    footer.innerHTML = Footer()
    props(params)


}

export default Layout;