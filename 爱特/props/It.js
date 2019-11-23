import React from 'react';
import Intrdn from './Introduction'
import './It.scss';
import Logo from './logo'
import Bg from'./Bg'
import Words from './Words'
import History from './History'
import Show from './Show'
import Underline from './Underline'
import Box from './box'
import Comments from './comments'
import Footer from './footer'

 

class It extends React.Component {
    constructor(props) {
        super(props);
      

    }
    scrollToAnchor=(anchorname)=>{
        if(anchorname){
            let anchorElement=document.getElementsByClassName(anchorname);
            if(anchorElement){
                anchorElement.scrollIntoView(
                    {
                        block:'start',
                        behavior:'smooth'
                    }
                )
            }
        }
    }

     ID=['BOX','BOX1']
     title1=
        {
            left:'部门介绍',
            right:'Department',
            down:'五大门派，总有你热爱',
        }
     title2=   {
            left:'成员介绍',
            right:'Members',
            down:'一身才华，每刻迸发',
        }
     title3=   {
            left:'历史介绍',
            right:'Zeitgeist',
            down:'玩转技术世界',
        }
     title4=   {
            left:'作品介绍',
            right:'Works',
            down:'一Code一世界，代码有乾坤',
        }
     title5=   {
            left:'留言板',
            right:'Comments',
            down:'在这里留下你宝贵的意见',
        }
    
    render() {
        return (
            <body>
            <Logo scrollToAnchor={this.scrollToAnchor} scrollIntoView={this.scrollIntoView}></Logo>
            <Bg></Bg>
            <Intrdn></Intrdn>
            <Words title={this.title1}></Words>
                <div className={'pas1'}>爱特工作室现在拥有五个部门，分别为：UI设计，前端开发，程序开发，APP开发和游戏开发。<br></br> 多样的部门满足丰富的兴趣。在这里，不论年龄，不论性别，只要你有一颗学技术的心，爱特工作室总能给予你惊喜！</div>
                <Box ID={this.ID[0]} ></Box>
            <Words title={this.title2}></Words>
                <div className={'pas1'}>每一届爱特人都身怀绝技，在每一刻都能迸发出奇思妙想。用双手解决一切难题，是极客的通行证。<br></br> 加入我们，和这些有趣又万能的灵魂在一起，把思考与责任铭记于心，把对技艺的热爱传承下去。</div>
                <Box ID={this.ID[1]}></Box>    
            <Words title={this.title3}></Words>
            <History></History>
            <Words title={this.title4}></Words>
                <div className={'pas1'}>Coding是我们与世界对话的方式，技术是我们与未来沟通的语言。<br></br>
                                        用键盘奏起一曲华丽乐章，调度程序去搭建理想的大厦与桥梁。</div>
            <Show></Show>
            <Underline></Underline>
            <Words title={this.title5}></Words>
            <Comments></Comments>
            <Footer></Footer>  
            </body>
        )
    }
}
export default It;