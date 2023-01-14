import Header from "../components/ss9/Header.jsx"
import Body from "../components/ss9/Body.jsx"
import Provider from "../components/ss9/Provider.jsx"
import Footer from "../components/ss9/Footer.jsx"


function SS9() {

    return (
        <Provider>
            <div className="ss9">
                <Header></Header>
                <Body></Body>
                <Footer></Footer>
            </div>
        </Provider>
    )
}

export default SS9