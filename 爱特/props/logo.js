import React from 'react';
import './logo.scss';


class Logo extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
    
        return(
            <div id={'nav'}>
                <div id={'logo'}>
                    <div id={'pic'}>
                        <div id={'left'}></div>
                        <div id={'leftA'}></div>
                        <div id={'right'}></div>
                    </div>
                    <p id={'En'}>ITStudio</p><br></br>
                    <p id={'Ch'}>爱特工作室</p>
                </div>
                <div id={'choice'}>
                    <a className={'choo'}>部门</a>
                    <a className={'choo'}>成员</a>
                    <a className={'choo'}>历史</a>
                    <a className={'choo'}>作品</a>
                    <a className={'choo'}>留言</a>
                    <button>加入</button>
                </div>
            </div>
            
        )
}
}

export default Logo;
