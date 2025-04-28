import React, {useState} from 'react'
import Header from './Header/Header'
import Sidebar from './Header/Sidebar'
import { Outlet } from 'react-router-dom';

export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className='rootWrapper'>
            <Header toggleSidebar={toggleSidebar} />
            <div className={`main-section ${isOpen? 'open': ''}` }>
                <Sidebar />
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
