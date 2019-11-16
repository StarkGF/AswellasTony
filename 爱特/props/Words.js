import React from 'react';
import './words.scss'



class Words extends React.Component{
    render(){
        return(
            <div className={'Words'}>
                <div className={'up'}>
                    <span className={'left'}>{this.props.title.left}</span>
                    <span className={'right'}>{this.props.title.right}</span>
                </div>
                <div className={'down'}>
                    <span className={'ddown'}>{this.props.title.down}</span>
                </div>
                <div className={'pas1'}>{this.props.title.pas}</div>
            </div>
        )
    }
}

export default Words;