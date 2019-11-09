import React from 'react';


class NavList extends React.Component{
 
    render(){
        return(
            <div className="Nav">
                {
                    this.props.List.map((item,index) => (
                        
                        <a className={item.class} href="#" onClick={()=>{
                            
                            this.props.reid(item.id)
                        }}>
                            {
                                item.name
                            }
                        </a>
                        
                    )
                )
            }
            </div>
        )
    
    }
}

export default NavList