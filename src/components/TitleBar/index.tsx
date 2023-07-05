import {Icon} from "@components";

const TitleBar = () => {

    return (
        <div className={'w-full h-12 absolute top-0 left-0 title-drag'}>
            <div className={'w-full h-5 flex items-center translate-y-4 translate-x-16'}>
                <div
                    className={'w-5 h-5 bg-red-500 hover:bg-red-500/40 text-white rounded-full flex items-center justify-center no-drag mr-3'}
                    onClick={() => {
                        window.Main.sendMessage('close-app')
                    }}
                >
                    <Icon type={'pet-close'} style={{fontSize: 12}}/>
                </div>
                <div
                    className={'w-5 h-5 bg-yellow-500 hover:bg-yellow-500/40 text-white rounded-full flex items-center justify-center no-drag'}
                    onClick={() => {
                        window.Main.sendMessage('min-app');
                    }}>
                    <Icon type={'pet-move'} style={{fontSize: 12}}/>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;