import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '@/components/dropdown';
const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
            <div className="flex justify-end p-4" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                </svg>
            </div>
            <ul className="mt-16">
                <Link to="/account">
                    <li className="p-4 hover:bg-gray-700">Đăng ký / Đăng nhập</li>
                </Link>
                <li>
                    <Dropdown title="Danh mục" items={[
                        {
                            label: 'Danh mục 1',
                            href: '/tieng-viet/tin-tuc/1',
                        },
                        {
                            label: 'Danh mục 1',
                            href: '/tieng-viet/tin-tuc/1',
                        },
                        {
                            label: 'Danh mục 1',
                            href: '/tieng-viet/tin-tuc/1',
                        }
                    ]}/>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
