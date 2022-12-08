import Lock from "../lock/Lock";
import { Divider } from 'antd';
import Visit from "../visit/Visit";
import Reach from "../Reach/Reach";
import Shipping from "../shipping/Shipping";
import Around from "../Around/Around";
import Top from "../Top/Top";
import Hotels from "../Hotels/Hotels";
import Eat from "../Eat/Eat";
import Important from "../Important/Important";
import Cost from "../Cost/Cost";
import FAQ from "../FAQ/FAQ";
const TableContent = () => {
    return (
        <div className="pt-20">
            <h1 className="px-10 text-2xl font-bold">Table of content</h1>
        <div className="md:flex  py-2 px-8">
            <div className="md:w-3/5 w-full  mr-10">
            <div className=" text-gray-700 py-5 pl-5 text-base font-normal bg-white rounded-md">
                <li>About Havelock Island</li>
                <li>How long to stay in Havelock?</li>
                <li>When to visit Swaraj Dweep? (Havelock)</li>
                <li>How to Reach Havelock?</li>
                <li>Directorate of Shipping Services</li>
                <li>Getting Around in Havelock</li>
                <li>Top things to do in Swaraj Dweep (Havelock)</li>
                <li>Hotels & Resorts in Swaraj Dweep (Havelock)</li>
                <li>Eat/ Dine/ Night Life in Havelock</li>
                <li>Important info about Havelock</li>
                <li>Cost in Havelock (Swaraj Dweep)</li>
                <li>FAQs about Havelock</li>
               
            </div>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">About Havelock Island</h1>
            <div className=" text-gray-700 my-5 p-8  text-base font-normal bg-white rounded-md">
                <p className="text-justify">Havelock in short, is paradise. It’s an island tucked away from the crowds in the warm waters of the Andaman Ocean. The island is covered mostly in dense jungle and fringed with white sandy beaches shaded by tall green trees. Diving in the crystal clear waters with shades of turquoise blue an experience that all must explore. Tourists simply love its picture perfect beaches, laid back vibe and amazing underwater world.</p>
               <br />
                <p className="text-justify">As far as islands in the Andamans go, Havelock is definitely the most tourism friendly and consequently the most visited. There are all sorts of accommodation options from bamboo cottages to luxury villas, great multinational cuisine restaurants, souvenir shops, ATMs and now even (slow but accessible) Internet cafés. You’ll find almost everything you need here, but at a slower pace. And even though it is one of the most visited islands in the Andamans it sees only a fraction of the visitors that crowd other paradise destinations around the globe.</p>
               
            </div>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">How long to stay in Havelock?</h1>
            <Lock></Lock>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">When to visit Swaraj Dweep? (Havelock)</h1>
            <Visit></Visit>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">How to Reach Havelock?</h1>
            <Reach></Reach>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">Directorate of Shipping Services</h1>
            <Shipping></Shipping>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">Getting Around in Havelock</h1>
            <Around></Around>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">Top things to do in Swaraj Dweep (Havelock)</h1>
            <Top></Top>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">Hotels & Resorts in Swaraj Dweep (Havelock)</h1>
            <Hotels></Hotels>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">Eat/ Dine/ Night Life in Havelock</h1>
            <Eat></Eat>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">Important info about Havelock</h1>
            <Important></Important>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">Cost in Havelock (Swaraj Dweep)</h1>
            <Cost></Cost>
            <Divider className="border-gray-400"></Divider>
            <h1 className="px-0 pt-2 text-gray-800 text-2xl font-bold">FAQs about Havelock</h1>
            <FAQ></FAQ>




            </div>
            <div className="w-2/5">
            <div className=" py-4 rounded-md hidden md:block lg:block bg-white">
            <h1 className="px-10 text-2xl text-green-600 font-bold">Popular Tourist Islands</h1>
            <div className="pl-12 pt-2 text-green-600">
            <li>Port Blair  Capital City</li>
            <li>Havelock Island</li>
            <li>Neil Island</li>
            <li>Baratang</li>
            </div>
            <h1 className="px-10 text-2xl text-green-600 font-bold">About Andaman Islands</h1>
            <div className="pl-12 pt-2 text-green-600">
            <li>Entry Formalities</li>
            <li>Geography</li>
            <li>Flora & Fauna</li>
            <li>Tourists Do's & Dont's</li>
            <li>How Safe is Andaman?</li>
            </div>
            <h1 className="px-10 text-2xl text-green-600 font-bold">Popular Places to Visit</h1>
            <div className="pl-12 pt-2 text-green-600">
            <li>Cellular Jail</li>
            <li>Ross Island</li>
            <li>Radhanagar Beach</li>
            <li>Jolly Buoy</li>
            <li>North Bay</li>
            <li>Natural Rock Bridge, Neil Island</li>
            <li>Barren Island</li>
            </div>
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default TableContent;