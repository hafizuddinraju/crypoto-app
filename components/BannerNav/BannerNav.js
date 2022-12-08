import { IoIosArrowForward } from 'react-icons/io';
const BannerNav = () => {
    return (
        <div>
            <ul className="flex md:flex-row flex-wrap items-center py-4 px-6">
                <li className="font-bold text-gray-400 hover:text-green-600 mx-2">Home</li><IoIosArrowForward></IoIosArrowForward>
                <li className="font-bold text-gray-400 hover:text-green-600  mx-1">Andaman Travel Guide</li><IoIosArrowForward></IoIosArrowForward>
                <li className="font-bold text-gray-900">HaveLock</li>
            </ul>
            
        </div>
    );
};

export default BannerNav;