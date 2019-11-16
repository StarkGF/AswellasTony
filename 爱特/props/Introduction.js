import React from 'react';
import pic1 from './第一.png';
import pic2 from './第二.png';
import pic3 from './第三.png';

function Intrdn(){
    return(
        <div id={'Intro'}>
            
            <span id={'C'}>关于我们</span>  
            <span id={'A'}> About us</span><br></br>
            <span id={'B'}>耕耘十七载，始终为技术</span>
        
            <div id={'tion'}>  爱特工作室成立于2002年，是一个在中国海洋大学信息科学与工程学院院领导主持下，以计算机技术人才培养，网络开发为特色的技术性团体。 </div>
            <div id={'nn'}>自成立以来，爱特以发现人才，培养人才，输送人才为最终目的，现已拥有UI设计、前端开发、程序设计、Android开发、游戏设计五大类方向，数十人的技术团队。优秀的团队文化与良好的技术氛围使爱特能够脱颖而出，经过多年的发展，现已成为海大网络技术的中坚力量！</div>
            <div id={'About'}>
                <div className={'us'}>
                    <div className={'uss'}>
                        <img className={'s'} src={pic1}/>
                        <span className={'title'}>团队文化</span><br></br>
                        <span className={'content'}>合作也是艺术</span>
                        </div>
                    <p>爱特一直以聚集和培养培养计算机人才为己任，发掘技术潜力，感受合作乐趣，让项目高效执行，让大家一同进步。</p>
                </div>
                <div className={'us'}>
                    <div className={'uss'}>
                        <img className={'s'} src={pic2}/>
                        <span className={'title'}>优秀创意</span><br></br>
                        <span className={'content'}>灵感建构未来</span>
                        </div>
                    <p>用创意打磨精巧设计，用智慧实现炫酷交互；用热情呈现高效代码，以交流触碰灵感火花；以创造激发全新想象，用双手创造改变未来。</p>
                </div>
                <div className={'us'} id={'us'}>
                    <div className={'uss'}>
                    <img className={'s'} src={pic3}/>
                        <span className={'title'}>乐在其中</span><br></br>
                        <span className={'content'}>洞察技术玄机</span>
                        </div>
                    <p>汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。</p>
                </div>
            </div>
        </div>
    )
}

export default Intrdn;