import React,{useState} from 'react'
import "./Feed.css"
import TweetBox from './TweetBox';
import Post from './Post';
import FlipMove from 'react-flip-move';


function Feed() {

    
    const [posts] = useState([ ]);

    
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
            <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <TweetBox />


            {/* post */}
            <FlipMove>
            {posts.map(post=>(
            <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
            ))}
            </FlipMove>
           
       
       
        </div>
    );
}

export default Feed;
