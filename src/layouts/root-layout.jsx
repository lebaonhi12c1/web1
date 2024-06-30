import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';

const RootLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            {/* <header>Header</header> */}

            <div className="h-screen flex flex-col">
                <Header toggleSidebar={toggleSidebar} />
                <div className="flex flex-1">
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <main className={`flex-1 p-4 mt-[64px] transition-margin duration-300 ${isSidebarOpen ? 'md:ml-64' : ''}`}>
                        <Outlet />
                    </main>
                </div>
            </div>

            {/* <footer>Footer</footer> */}
        </>
    );
};

export default RootLayout;
