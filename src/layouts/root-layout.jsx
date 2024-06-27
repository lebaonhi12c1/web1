import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            {/* <header>Header</header> */}

            <main className="" role="main">
                <Outlet />
            </main>

            {/* <footer>Footer</footer> */}
        </>
    );
};

export default RootLayout;