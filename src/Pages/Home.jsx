import Header from "../Layout/Shared/Header/Header";
import NavBar from "../Layout/Shared/Navbar/NavBar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <h2 className="text-2xl font-poppins">Home</h2>
        </div>
    );
};

export default Home;