
export const Banner = () => {
    return (
      <div className="relative">
        <img
          src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/Havelock-Banner-Go2andaman.jpeg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative py-20 bg-gray-700 bg-opacity-25">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              
            </div>
          </a>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-center text-gray-100 sm:text-4xl md:mx-auto">
              <span className="relative  inline-block">
                
                <span className=" relative text-xl  md:text-6xl">Havelock Island</span>
              </span>
            </h2>
            <p className=" text-xs text-center md:text-2xl font-semibold text-gray-100 lg:text-lg">
            Travel Guide - Top Things to Do & See, Hotel & Resorts, Restaurants & Cafe and more
            </p>
          </div>
          
        </div>
      </div>
        </div>
      </div>
    );
  };