import React from 'react';
 import picture01 from "./德普.JPG"
 import picture02 from"./小李.JPG"
 import picture03 from"./基努.PNG"
 import picture04 from"./甜茶.JPG"
 import picture05 from"./唐尼.JPG"

const HandSome=[
    picture01,picture02,picture03,picture04
]
class Men extends React.Component{
    choice =(id) =>{
        return HandSome[id]? HandSome[id]:picture05;
    };
    render(){
        return(
            <div className="MyMan">
                { <img src={this.choice(this.props.id)}></img> }
                
            </div>
        )
    }
}

export default Men;