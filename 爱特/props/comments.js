import React from 'react';
import './comment.scss';

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:[
                '呵呵',
                'Do not too entangled in the moment,do not worry too much about the future.When you have experienced some things,the scenery in front of you is different from the past.',                
                'Stay humble,Stay foolish'
            ]
        }
    }
    render(){
        return(
            <div id={'message_box'}>
                <div id={'message'}>
                    <div id={'strange'}>
                    {
                        this.state.comments.map((string)=>(
                            <div className={'remark'}>
                                <span>
                                    {string}
                                </span>
                            </div>

                        ))
                    }
                    </div>
                    <div id={'row'}></div>
                </div>
                <div id={'next'}>
                    <textarea>写点什么。。。。</textarea>
                    <input type="text"  placeholder="验证码"></input>
                    <buttom>发送</buttom>
                </div>
                
            </div>
        )
    }
}

export default Comments;