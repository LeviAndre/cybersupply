import Categories from "../components/Categories/Categories";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Categories />
            <Projects />
            <Footer />
        </>
    )
}

export default Home;