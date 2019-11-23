import React from 'react';
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import './BOX.scss'


 const    List1=[
        {
            image:image1,
            id:0,
            name:'程序开发',
            class:'CX'
        },
        {
            image:image2,
            id:1,
            name:'前端开发',
            class:'QD'
        },
        {
            image:image3,
            id:2,
            name:'UI设计',
            class:'UI'
        },
        {
            image:image4,
            id:3,
            name:'APP开发',
            class:'APP'
        },
        {
            image:image5,
            id:4,
            name:'游戏开发',
            class:'GAME'
        }
    ]

 const    List2=[
        {
            header:'14’',
            id:0,
            name:'2014级',
            class:'A2014',
        },
        {
            header:'15’',
            id:1,
            name:'2015级',
            class:'A2015',
        },
        {
            header:'16’',
            id:2,
            name:'2016级',
            class:'A2016',
        },
        {
            header:'17’',
            id:3,
            name:'2017级',
            class:'A2017',
        },
        {
            header:'18’',
            id:4,
            name:'2018级',
            class:'A2018',
        },

    ]

class Box extends React.Component{
    constructor(props){
        super(props);
        
    }
    switchHandler = (ID) => {
        return ID==='BOX' ? List1:List2;
    }
    render(){
        return(
            <div className={this.props.ID==='BOX' ? 'list1':'list2'} >
               
                {
                    this.switchHandler(this.props.ID).map((item)=>(
                        <div id={item.class} className={'ture'}>
                            <div className={'depa'}>
                                <img src={item.image}>
                                    
                                </img>
                                <span className={'ttop'}>
                                    {item.header}
                                </span>
                                <span className={'uunder'}>
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
            
    
}  

export default Box;
