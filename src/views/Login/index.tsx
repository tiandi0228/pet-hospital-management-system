import {Button, Input} from "antd";
import logo from '@assets/logo.png';
import {useNavigate} from "react-router-dom";
import {Icon} from "@components";

const Login = () => {

    const navigate = useNavigate();
    const imgs = ['https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/18d8bc3eb13533fa378257cfa1d3fd1f41345b1f.jpg', 'https://img2.baidu.com/it/u=3902038064,676412988&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', 'https://n.sinaimg.cn/sinacn14/100/w900h1600/20180629/675c-heqpwqy8767854.jpg'];

    return (
        <>
            <div className={'flex'}>
                <div className={`w-3/6 h-[calc(100vh_-_100px)]  bg-cover bg-center select-none`}
                     style={{backgroundImage: `url(${imgs[Math.round(Math.random() * 2)]})`}}>
                    <div className={'pt-8 pl-8 flex items-center'}>
                        <img className={'w-14 h-14'} src={logo} alt={'PET HOSPITAL'}/>
                        <div className={'text-lg pl-4 font-black'}>PET HOSPITAL</div>
                    </div>
                </div>
                <div className={'flex-1 flex items-center justify-center '}>
                    <div className={'w-4/5'}>
                        <div className={'w-full h-12 border-2 border-[#A0AACE] rounded-lg hover:border-[#4E63B7] active:border-[#4E63B7]'}>
                            <Input className={'h-12'}
                                   bordered={false}
                                   prefix={<Icon type={'pet-profile'} className={'text-[#A0AACE]'} style={{fontSize: 24}} />}
                                   placeholder={'Please enter your username'}/>
                        </div>
                        <div className={'w-full mt-4 h-12 border-2 border-[#A0AACE] rounded-lg hover:border-[#4E63B7] active:border-[#4E63B7]'}>
                            <Input className={'h-12'}
                                   bordered={false}
                                   prefix={<Icon type={'pet-password'} className={'text-[#A0AACE]'} style={{fontSize: 24}} />}
                                   placeholder={'Please enter your password'}/>
                        </div>
                        <div className={'w-full mt-4'}>
                            <Button
                                block
                                className={'h-12 outline-0 bg-blue-700 hover:bg-blue-800 text-lg text-white'}
                                onClick={() => {
                                    navigate('/');
                                    window.Main.sendMessage('max-app');
                                }}
                            >Sign
                                in</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;