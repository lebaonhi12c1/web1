// import React from 'react';

// const Header = ({ toggleSidebar }) => {
//     return (
//         <div className="flex items-center justify-between bg-gray-900 text-white p-4">
// <button onClick={toggleSidebar} className="focus:outline-none">
//     <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//         ></path>
//     </svg>
// </button>
//             <h1 className="text-xl">My Application</h1>
//         </div>
//     );
// };

// export default Header;

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import cn from '@/helper/cn';
import { useAuth } from '@/hooks/use-auth';

const HeaderRoot = ({ toggleSidebar }) => {
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    const [navbarOpen, setNavbarOpen] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(localStorage.getItem('user') !== null); // Kiểm tra đã đăng nhập hay chưa
    const { isLoggedIn, mutate, data } = useAuth();
    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleNavbarToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        mutate();
        localStorage.removeItem('user'); // Xóa thông tin người dùng trong localStorage
        // setLoggedIn(false); // Cập nhật trạng thái đã đăng nhập
        setDropdownOpen(false);
    };

    return (
        <nav className="bg-white px-4 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 z-10">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4 max-w-[992px]">
                <button onClick={toggleSidebar} className="focus:outline-none hidden md:block">
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
                {/* <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src="https://atlanticjsc.com.vn/wp-content/uploads/2018/09/WHO-Logo-1.png"
                        className="h-8"
                        alt="Brand Name"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        BrandName
                    </span>
                </Link> */}
                <div className="w-full relative flex items-center justify-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {isLoggedIn ? (
                        <button
                            type="button"
                            className="flex text-sm relative bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded={dropdownOpen}
                            onClick={handleDropdownToggle}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={data?.data?.avatar} alt="user photo" />
                            <div
                                className={classNames(
                                    'z-50 my-4 absolute top-[25px] right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600',
                                    {
                                        hidden: !dropdownOpen,
                                    },
                                )}
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3 text-left">
                                    <span className="block text-sm text-gray-900 dark:text-white">
                                        {data?.data?.fullname ? data?.data?.fullname : 'No name'}
                                    </span>
                                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                                        {data?.data?.email ? data?.data?.email : 'No email'}
                                    </span>
                                </div>
                                <ul className="py-2 flex flex-col items-start" aria-labelledby="user-menu-button">
                                    <li>
                                        <Link
                                            to="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Earnings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            onClick={handleLogout} // Xử lý logout khi click vào Sign out
                                        >
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </button>
                    ) : (
                        <Link to="/account" className="text-sm text-gray-700 hover:text-blue-500">
                            Login/Register
                        </Link>
                    )}
                    <button
                        data-collapse-toggle="navbar-user"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-user"
                        aria-expanded={navbarOpen}
                        onClick={handleNavbarToggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={classNames('items-center justify-between w-full md:flex md:w-auto md:order-1', {
                        hidden: !navbarOpen,
                    })}
                    id="navbar-user"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/account"
                                className={cn('block py-2 px-3 rounded hover:bg-slate-200 md:hidden', {
                                    'bg-blue-400 text-white': location.pathname.includes('account'),
                                })}
                                aria-current="page"
                            >
                                Đăng ký / Đăng nhập
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tieng-viet/categories"
                                className={cn('block py-2 px-3 rounded hover:bg-slate-200 md:hidden', {
                                    'bg-blue-400 text-white': location.pathname.includes('categories'),
                                })}
                                aria-current="page"
                            >
                                Danh mục
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HeaderRoot;
