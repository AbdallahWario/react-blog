import React from 'react';
import './style.css'
import Card from '../UI/Card';

const Sidebar= (props  ) => {
    return (
       <div className="sidebarContainer">
           <Card style={{marginBottom:'20px',padding:'20px'}} >
             <div className="cardHeader">
                 <span>About Us</span>
                 <div className="profileImageContainer">
                     <img src={require('../../blogPostImages/giraffe.jpg')} alt="me"/>
                 </div>
              <div className="cardBody">
            <p className="personalBio">I'm Abdallah Wario,a software developer with interest in React and nodejs</p>
              </div>
             </div>
         </Card>

         <Card >
             <div className="cardHeader">
                 <span>Social Network</span>

             </div>
         </Card>
       </div>
        
        
            
      
    )
}
export default Sidebar;