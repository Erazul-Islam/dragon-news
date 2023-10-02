import Header from "../Layout/Shared/Header/Header";
import LeftSideNAv from "../Layout/Shared/LeftSide/LeftSideNAv";
import NavBar from "../Layout/Shared/Navbar/NavBar";
import RightSideNav from "../Layout/Shared/RightSightNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div>
                <LeftSideNAv></LeftSideNAv>
            </div>
            <div className="col-span-2">
                <h2 className="text-4xl">News coming soon...</h2>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default Home;