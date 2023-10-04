import { useLoaderData } from "react-router-dom";
import Header from "../Layout/Shared/Header/Header";
import LeftSideNAv from "../Layout/Shared/LeftSide/LeftSideNAv";
import NavBar from "../Layout/Shared/Navbar/NavBar";
import RightSideNav from "../Layout/Shared/RightSightNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./newscard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNAv></LeftSideNAv>
                </div>
                <div className="col-span-2">
                    {
                        news.map(oneNews => <NewsCard news={oneNews} key={oneNews._id}></NewsCard>)
                    }
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