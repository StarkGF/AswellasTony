import React from 'react';
import './history.scss';

function History(){
    return(
        <>
        <div id={'father'}>
            <div className={'chid'}><span className={'na'}>部门增加</span><br></br><span className={'me'}>新增游戏开发部门</span></div>
            <div className={'chid'}><span className={'na'}>新增成员</span><br></br><span className={'me'}>9位新成员加入爱特工作室大家庭</span></div>
            <div className={'chid'}><span className={'na'}>重构展示网</span><br></br><span className={'me'}>重构爱特展示网，成功上线运行</span></div>
            <div className={'chid'} id={'ee'}><span className={'na'}>新网站上线</span><br></br><span className={'me'} >制作众创空间预约系统，成功上线</span></div>
        </div>
        <div id={'selection'}>
            <div  id={'Aa'} className={'select'}>2014</div>
            <div  id={'Bb'} className={'select'}>2105</div>
            <div  id={'Cc'} className={'select'}>2016</div>
            <div  id={'Dd'} className={'select'}>2017</div>
            <div  id={'Ee'} className={'select'}>2018</div>
        </div>
        </>
    )
}
export default History;