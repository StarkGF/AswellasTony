import React from 'react';

class Search extends React.Component{
    constructor(props){
    super(props);
    this.state={
        text:''
    }

    } 
  

    render(){
        return(
            <div className='add'>
                <input type="text" onChange={(e)=>{this.setState({text:e.target.value})}}>
                </input>
                <button onClick={()=>{this.props.relist(this.state.text);
               
                }}>
                    呵呵
                </button>
                
            </div>
        )
    }
}

export default Search;