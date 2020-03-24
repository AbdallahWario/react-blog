import React from 'react';
import './style.css'
import Card from '../UI/Card';

const Blogpost = (props) => {
    return (
            <div className="blogPostContainer">
            <Card >
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Beautiful is always beautiful</h1>
                    <span  className="postedBy">posted on March 24th,2020 by Leila Abduba</span>

                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/room.jpg')} alt="post Image" />
                </div>
               
            </Card>
            </div>
          
      
            
        
    )
}
export default Blogpost;