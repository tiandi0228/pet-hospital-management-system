import Routes from '@/router';
import {TitleBar, Sidebar, Icon,Search} from "@components";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import logo from '@assets/logo.png';
import {Badge} from "antd";

function App() {

    const location = useLocation();

    const [pathname, setPathname] = useState<string>('');


    useEffect(() => {
        setPathname(location.pathname)
    }, [location]);


    return (
        <>
            <TitleBar/>
            <div
                className={'w-[calc(100vw_-_80px)] mx-auto h-[calc(100vh_-_100px)] mt-10 backdrop-blur-xl bg-gradient-to-tr from-[#ECEDF4]/90 to-[#EAEAF3]/90 rounded-3xl overflow-hidden shadow-lg shadow-[#CCCBEF]/40'}>
                {
                    pathname !== '/login' && <>
                        <div className={'flex'}>
                            <Sidebar/>
                            <div className={'flex-1 p-10 select-none'}>
                                <div className={'h-14 flex items-center justify-between'}>
                                    <Search/>
                                    <div className={'flex items-center'}>
                                        <Badge count={0} className={'w-6'}>
                                            <Icon type={'pet-notification'} className={'text-[#A0AACE]'}
                                                  style={{fontSize: 26}}/>
                                        </Badge>
                                        <div className={'pl-4'}>
                                            <img className={'w-8 h-8'} src={logo} alt={'logo'}/>
                                        </div>
                                    </div>
                                </div>
                                <Routes/>
                            </div>
                        </div>
                    </>
                }
                {
                    pathname === '/login' && <Routes/>
                }
            </div>
        </>
    )

}

export default App
