import React from 'react';
import './show.scss';
import harry from './haary.jpg';
import heromin from './heromin.jpg';
import roen from './roen.jpg';

class Show extends React.Component{
    constructor(props){
        super(props);
        }
    
    render() {
        return(
            <div id={'wall'}>
                <div className='sh'><img src={roen}></img></div>
                <div className='sho'><img src={heromin}></img></div>
                <div id='ow'><img src={harry}></img></div>
            </div>
        )
    }
}

export default Show;