const Cost = () => {
    return (
        <div className=" text-gray-700 my-5 p-8  text-base font-normal bg-white rounded-md">
        <p className="text-justify">There are 4 main costs that one incurs in Havelock:</p>
        <p className="text-2xl py-3 font-semibold text-gray-800">1. Accommodation</p>
        <div className="text-orange-600">
            <li><strong>Basic</strong> accommodation costs around Rs.1000 per night.</li>
            <li><strong>Mid Range</strong> accommodation costs around Rs.3000</li>
            <li><strong>Premium</strong> accommodation can cost anywhere between Rs.15000-30000.</li>
        </div>
        <p className="text-green-600 py-3">Please click here for details.</p>
        <p className="text-2xl text-gray-800 font-semibold py-3">2. Transfers</p>
        <p className="text-justify">Car transfers for a six-seater can cost up to INR 400 for a drop from the jetty to Beach No. 5 and auto-rickshaws charge about INR 100 for the same. You can also scooter at about 500 per day. Bicycle rentals are cheapest at INR 100 to 150 per day. <span className="text-green-500">here</span></p>
        <p className="text-2xl text-gray-800 font-semibold py-3">3. Activities</p>
        <p className="text-justify">A Discover Scuba Diving (DSD) costs about INR 3,500 and a kayak trip about 2,500. If you are the adventurous kind, we suggest keeping aside a cost of at least INR 5,000 per person for activities in Havelock. <span className="text-green-500">here</span></p>
        <p className="text-2xl text-gray-800 font-semibold py-3">4. Food</p>
        <p className="text-justify">Food in Havelock, though more expensive than Port Blair is still very affordable. A basic meal for 2 would cost around INR 400 and at a luxury resort about INR 1,400. A candlelight dinner for two costs about INR 5,000.</p>
        <br />
        <p>Thus a day in Havelock could cost anywhere between INR 2,500 to INR 10,000 per person.</p>
        <br />
        <p className="italic">A suggested Itinerary would be:</p>
        <div className="italic py-3">
            <p className="py-2"><strong className="text-orange-600"> Day 1:</strong><span className="text-green-600"> Take a morning ferry to Havelock.</span> Visit Radhanagar Beach in the evening</p>
            <p className="py-2"><strong className="text-orange-600 "> Day 2:</strong> Try <span className="text-green-600"> Scuba Diving</span> and Kayaking</p>
            <p className="py-2"><strong className="text-orange-600 "> Day 3:</strong><span className="text-green-600"> Trek to Elephant Beach</span>  and try snorkeling</p>
            <p className="py-2"><strong className="text-orange-600 "> Day 4:</strong> Return back to Port Blair or go to Neil.</p>
        </div>
      
        
       
    </div>
    );
};

export default Cost;