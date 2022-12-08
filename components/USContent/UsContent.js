import Choose from "../Choose/Choose";

const UsContent = () => {
    return (
        <div>
        <div className="mb-10 pt-10 text-center md:mb-12">
          <div>
            <p className="inline-block text-center px-3 py-px mb-4 text-2xl font-bold tracking-wider text-gray-900  rounded-full bg-teal-accent-400">
            They ❤️ Us
            </p>
            <img className="w-16 mx-auto" src="https://ocean.go2andaman.com/wp-content/uploads/2020/10/quote-1.svg?compress=true&quality=90&w=940&dpr=0.9" alt="" />
          </div>
        </div>
        <Choose></Choose>
            
        </div>
    );
};

export default UsContent;