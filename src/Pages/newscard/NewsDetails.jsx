import { useParams } from 'react-router-dom';
import Header from '../../Layout/Shared/Header/Header';
import RightSideNav from '../../Layout/Shared/RightSightNav/RightSideNav';
import NavBar from '../../Layout/Shared/Navbar/NavBar';

const NewsDetails = () => {
    const { id,author,details } = useParams();
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-2xl">Dragon News</h2>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <p>{details}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">{id}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;