import Header from "@components/Header"
import Footer from "@components/Footer"

const Layout = (props) => {
    // console.log(props)
    const view = `
        ${Header()}
        ${props}
        ${Footer()}
    `
    return view;
}

export default Layout;