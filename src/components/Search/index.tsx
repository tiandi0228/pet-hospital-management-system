import {Input} from "antd";
import {useState} from "react";
import Icon from "../Icon";


const Search = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div
            className={'flex items-center w-3/5 h-12 relative border-2 border-[#A0AACE] rounded-lg  hover:border-[#4E63B7] active:border-[#4E63B7]'}>
            <Input
                prefix={<Icon type={'pet-search'} className={'text-[#A0AACE]'}
                              style={{fontSize: 20}}/>}
                className={'w-full'}
                onChange={(e) => {
                    if (e.target.value.indexOf('1') >= 0) {
                        setOpen(true);
                    } else {
                        setOpen(false);
                    }
                }}
                onBlur={() => {
                    setOpen(false);
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
    )
}

export default Search;