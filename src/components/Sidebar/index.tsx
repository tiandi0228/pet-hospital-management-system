import {useLocation, useNavigate} from "react-router-dom";
import logo from '@assets/logo.png';
import Icon from '../Icon';
import {useEffect, useState} from "react";

type MenuIF = {
    path: string;
    icon: string;
    name: string;
}

const Sidebar = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [pathname, setPathname] = useState<string>('');

    const menu: MenuIF[] = [
        {
            path: '/',
            icon: 'pet-home',
            name: 'Home'
        },
        {
            path: '/user',
            icon: 'pet-user',
            name: 'User Center'
        },
        {
            path: '/setting',
            icon: 'pet-setting',
            name: 'Setting'
        },
        {
            path: '/logs',
            icon: 'pet-logs',
            name: 'Logs'
        }
    ];

    useEffect(() => {
        setPathname(location.pathname)
    }, [location]);

    return (
        <div className={'w-64 select-none'}>
            <div className={'flex items-center px-6 py-12'}>
                <img className={'w-12 h-12'} src={logo} alt={'logo'}/>
                <span className={'pl-3 text-xl color-[#54679B] font-black'}>PET HOSPITAL</span>
            </div>
            <>
                {
                    menu.map((item: MenuIF, index: number) => {
                        return <div
                            key={index}
                            className={`h-14 px-10 flex items-center hover:bg-white hover:border-r-[#4E63B7] hover:border-r-8 hover:rounded-tr-md hover:rounded-br-md hover:text-[#4E63B7] ${item.path === pathname ? 'bg-white border-r-[#4E63B7] border-r-8 rounded-tr-md rounded-br-md text-[#4E63B7]' : 'text-[#A0AACE]'}`}
                            onClick={() => {
                                navigate(item.path);
                            }}>
                            <Icon type={item.icon} style={{fontSize: 24}}/>
                            <span className={'text-sm pl-2'}>{item.name}</span>
                        </div>
                    })
                }
            </>
            <div
                className={'h-14 px-10 flex items-center text-[#A0AACE] hover:bg-white hover:border-r-[#4E63B7] hover:border-r-8 hover:rounded-tr-md hover:rounded-br-md hover:text-[#4E63B7]'}
                onClick={() => {
                    navigate('/login');
                    window.Main.sendMessage('resize-window');
                }}>
                <Icon type={'pet-logout'} style={{fontSize: 24}}/>
                <span className={'text-sm pl-2'}>Log out</span>
            </div>
        </div>
    )
}

export default Sidebar;