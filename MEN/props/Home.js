import React from 'react';
import Search from './search'
import Navlist from './Navlist'
import Men from './content'
import'./呵呵.css'

class Home extends React.Component{
    constructor(props){
    super(props);
    this.state={
        id: 0, 
    List:[
        {
            name:'Johnny Depp',
            id:0,
            class:'one',
        },
        {
            name:'Leonardo DiCaprio',
            id:1,
            class:'two'
        },
        {
            name:'Keanu Reeves',
            id:2,
            class:'three',
        },
        {
            name:'Timothee Chalamet',
            id:3,
            class:'four'
        }
    ],
    
    }
}
    relist=(value)=>{
        this.setState((preState)=>({List:[...preState.List,{
            name:value, }]})
    )}

    
    reid=(id)=>{
        this.setState({id})
    }
  
    render()
    {
        return(
            <div id='men'>
            <p>People see,People <span id='L'>Love ; </span> Flowers see,Flowers<span id='B'> Bloom ; </span> Cars see,Cars<span id='R'> Break ! </span></p>
            <Search relist={this.relist}
            List={this.List}></Search>
            <Navlist List={this.state.List} reid={this.reid}  id={this.state.id}></Navlist>
            <Men id={this.state.id}></Men>
            </div>
            
        )
    }

}
export default Home;