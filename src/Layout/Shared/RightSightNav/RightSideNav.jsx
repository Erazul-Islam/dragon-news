import { FaGoogle, FaGithub, FaFacebook, FaInstagram, } from 'react-icons/fa';
import { FiTwitter } from "react-icons/fi";

import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <div className="text-3xl">LogIn With</div>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>  Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>  Git hub
                </button>
            </div>
            <div className='p-4  mb-6'>
                <div className="p-4 flex mb-4 text-lg items-center">Find us on</div>
                <a href="" className='p-4 rounded-t-lg flex border font-semibold'> <FaFacebook className='mr-3'></FaFacebook> Facebook </a>
                <a href="" className='p-4 flex border font-semibold'> <FiTwitter className='mr-3'></FiTwitter> Twitter </a>
                <a href="" className='p-4 rounded-b-lg flex border font-semibold'>  <FaInstagram className='mr-3'></FaInstagram> Instagram </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <div className="text-3xl">Q zone</div>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;