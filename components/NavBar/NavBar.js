import Link from "next/link";
import { useState } from "react";
import { Input, Space } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
const { Search } = Input;
export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [inputSearch, setInputSearch] = useState(false);
    const onSearch = (value) => console.log(value);
    const manuItems = <>
    <li>
                <Link
                  href="/"
                  aria-label="Plan Your Trip"
                  title="Plan Your Trip"
                  className="font-bold text-sm tracking-wide text-black  transition-colors duration-200 hover:text-green-600"
                >
                  Plan Your Trip
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  href="/"
                  aria-label="Book Tours"
                  title="Book Tours"
                  className="font-bold text-sm tracking-wide text-black  transition-colors duration-200 hover:text-green-600"
                >
                 Book Tours
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  href="/"
                  aria-label="Book Ferry"
                  title="Book Ferry"
                  className="font-bold text-sm tracking-wide text-black  transition-colors duration-200 hover:text-green-600"
                >
                  Book Ferry
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  href="/"
                  aria-label="Travel Blog"
                  title="Travel Blog"
                  className="font-bold text-sm tracking-wide text-black  transition-colors duration-200 hover:text-green-600"
                >
                  Travel Blog
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  href="/"
                  aria-label="Contact Us"
                  title="Contact Us"
                  className="font-bold text-sm tracking-wide text-black  transition-colors duration-200 hover:text-green-600"
                >
                  Contact Us
                </Link>
              </li>
              <hr />
              
    
          </> 
  
    return (
      <div className="shadow-md">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              aria-label="Logo"
              title="Logo"
              className="inline-flex items-center"
            >
              <div>
                <img src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg" className="w-20" alt="" />
              </div>
             
            </Link>
            <ul className="flex items-center hidden space-x-4 lg:flex">
                {manuItems}
                {
                    inputSearch?
                    <li>
                    <input className="border rounded-md px-2 py-1" placeholder="Search" type="text" />
                   </li>
                :
               ''


                }
                <li onClick={()=>setInputSearch(!inputSearch)}>
                    <AiOutlineSearch></AiOutlineSearch>
                </li>
                
                
              
            </ul>
            <div className="lg:hidden z-10">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          href="/"
                          aria-label="Logo"
                          title="Logo"
                          className="inline-flex items-center"
                        >
                         <div>
                            <img src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg" className="w-20" alt="" />
                        </div>
                          
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                       {manuItems}
                       <li className="text-center">
                       <Search
                        
                        placeholder="input search text"
                        allowClear
                        onSearch={onSearch}
                        style={{
                            width: 258
                        }}
                        />
                       </li>
                      </ul>
                    </nav>
                  </div>
                </div>
               )} 
            </div>
          </div>
        </div>
      </div>
    );
  };