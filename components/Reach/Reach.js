import CardApp from "../Card/CardApp";

const Reach = () => {
    return (
        <div className=" text-gray-700 my-5 p-8  text-base font-normal bg-white rounded-md">
        <p className="text-justify">Havelock Island can be reached by Sea and by Air, however, the easiest way to travel to Havelock would be by the Sea.<strong> Private and Government ferries</strong> operate from neighboring islands (Port Blair and Neil Island). However, we recommend private ferries, as the booking is hassle-free and doesn’t require waiting in line, the same can be booked through us for an easy and<strong> worry-free experience.</strong></p>

        <br />
        <div className=" w-full md:w-3/4 mx-auto">

        <CardApp></CardApp>
        </div>
        <p className="pt-3">A few private ferry companies that sail to havelock Island been listed below:</p>
        <div className="pl-12 font-medium pt-2 text-orange-600">
            <li>Makruzz Ferry</li>
            <li>ITT Majestic Ferry</li>
            <li>Sealink Ferry</li>
            <li>Green Ocean Ferry</li>
            <li>Aashi Ferry</li>
        </div>

        <strong className="text-green-600">Please click here for ferry timing and booking</strong>

      
        
       
    </div>
    );
};

export default Reach;