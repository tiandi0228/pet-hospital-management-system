import Routes from '@/router';
import {TitleBar, Sidebar, Icon} from "@components";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import logo from '@assets/logo.png';
import {Badge, Input} from "antd";

function App() {

    const location = useLocation();

    const [pathname, setPathname] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);

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
                                    <div
                                        className={'flex items-center w-3/5 h-12 relative border-2 border-[#A0AACE] rounded-lg  hover:border-[#4E63B7] active:border-[#4E63B7]'}>
                                        <Input
                                            prefix={<Icon type={'pet-search'} className={'text-[#A0AACE]'}
                                                          style={{fontSize: 20}}/>}
                                            className={'w-full'}
                                            onChange={(e) => {
                                                if (e.target.value) setOpen(true);
                                            }}
                                            bordered={false}/>
                                        <div
                                            className={`h-32 absolute top-12 -left-0.5 -right-0.5 border-2 border-[#A0AACE] rounded-lg bg-white shadow-md ${open ? 'show' : 'hidden'}`}>
                                            <div
                                                className={'h-10 flex items-center justify-between px-6 hover:bg-gray-300/50'}
                                                onClick={() => {
                                                    setOpen(false);
                                                }}>
                                                <span className={'text-[#4E63B7]'}>1111111111</span>
                                                <span className={'text-[#A0AACE]'}>Tom Cat</span>
                                            </div>
                                            <div
                                                className={'h-10 flex items-center justify-between px-6 hover:bg-gray-300/50'}
                                                onClick={() => {
                                                    setOpen(false);
                                                }}>
                                                <span className={'text-[#4E63B7]'}>1111111111</span>
                                                <span className={'text-[#A0AACE]'}>Tom Dog</span>
                                            </div>
                                        </div>
                                    </div>
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
