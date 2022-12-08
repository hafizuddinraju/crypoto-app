import CardApp from "../Card/CardApp";

const Hotels = () => {
    return (
        <div className=" text-gray-700 my-5 p-8  text-base font-normal bg-white rounded-md">
        <p className="text-justify">The tourist infrastructure in Havelock is the best among all the islands in the Andamans. You can find beach resorts at budget rates or more luxurious cottages at a premium cost.</p>
        <br />
        <p className="text-justify">Prices range from INR 1000 a night for a budget stay, INR 3000 for mid-budget stays, and INR 25,000 for luxurious stays. However, fares vary between peak and low depending on the tourist seasons. During peak season, prices can shoot up and the best places fill up fast. It is advisable to book ahead.</p>
        <br />
        <p>Camping is not permitted on public land or beaches.</p>
        <div className="pl-12 pt-2">
            <li><strong className="text-orange-500"> Low Budget:</strong> INR  500- 3000</li>
            <li><strong className="text-orange-500">Mid-Range:</strong> INR 4000- 8000</li>
            <li><strong className="text-orange-500">Premium Stays:</strong> INR 15000- 25000</li>
            
            </div>
            <p className="text-2xl font-medium text-gray-800 py-2">List of some of the recommended places to stay in Havelock</p>
            <p className="text-1xl text-gray-800 font-medium py-3">1. Taj Exotica:</p>
            <br />
        <div className=" w-full md:w-3/4 mx-auto">

        <CardApp></CardApp>
        </div>
        <p className="text-justify pt-5">
        Located on the <span className="text-green-400">Radha Nagar Beach</span> in Havelock, this place needs no introduction. Luxurious rooms with beautiful views and amazing restaurants on the property are the best way to pamper yourself.</p>
        <p className="text-2xl font-semibold text-gray-800 py-4">3. Seashell Resort:</p>
        <p className="text-justify">This beach-facing paradise is designed to keep a high-end luxury traveler in mind. This resort offers a spa, infinity pool, and candlelight dinners under the stars. This luxurious stay is priced around INR 9000</p>
        <p className="text-2xl font-semibold text-gray-800 py-4">4. Jalakara:</p>
        <p className="text-justify">This beautiful boutique hotel amidst the rainforests of the Havelock island comes with a wide range of tastefully designed rooms and a beautiful villa with a pool. Making it one of the best places to stay in Havelock.</p>
        <p className="text-2xl font-semibold text-gray-800 py-4">5. Havelock Island Beach Resort:</p>
        <p className="text-justify">Located a stone’s throw away from the beach, Havelock island beach resort is a beautiful place to unwind and relax. Accommodation falls in Mid-range budget pricing from INR 3000-5000.</p>
        <p className="text-2xl font-semibold text-gray-800 py-4">6. The Flying Elephant:</p>
        <p className="text-justify">Inspired by Indian culture and decor, this stay is inspired by Yoga and one can expect well-ventilated bamboo cottages, an open-air shower area, and positive vibes. This yoga stay is priced around INR 3000-3500.</p>
        <p className="text-2xl font-semibold py-5 text-gray-800">Here is a list of other stays which we also recommend:</p>
        <div className="pl-12 font-normal pt-2 text-orange-600">
            <li>Munjoh Ocean Resort</li>
            <li>TSG Blue Resort</li>
            <li>Silver Sand Beach Resort</li>
            <li>Dolphin Resort</li>
            <li>Wild Orchid Beach Resort</li>
            <li>Symphony Palms Beach Resort</li>
            <li>Aparupa Sands Marina</li>
        </div>
      
        
       
    </div>
    );
};

export default Hotels;