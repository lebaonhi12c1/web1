import React from 'react';

const Header = ({ toggleSidebar }) => {
    return (
        <div className="flex items-center justify-between bg-gray-900 text-white p-4">
            <button onClick={toggleSidebar} className="focus:outline-none">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>
            <h1 className="text-xl">My Application</h1>
        </div>
    );
};

export default Header;
