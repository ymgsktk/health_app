import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../APIdata/API'; 
import './home.css';
import MainLayout from "../mainlayout";
import commentIcon from '../../img/comment_icon.png';
import { Post } from '../../interfaces/post';

const Home = () => {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
        console.log('postdata is',postsData)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);
  
  return (
    <MainLayout>
      <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <div className="post-container-child">
            <div className='img-des'>
              <div className='icon-title'>
                <img src={post.iconUrl} className='icon-image'/>
                <div className='title-des'>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-teamdescription">{post.teamdescription}</p>
                </div>
              </div>
              <p className='post-description'>{post.description}</p>
            </div>
            <img src={post.imageUrl} alt={post.title} className="post-image" />
          </div>
          <div className="post-interactions">
            <span>☆{post.likes}</span>
            <span>♡{post.likes}</span>
            <span><img src={commentIcon} className="icon-comment"/>{post.comments}</span>
          </div>
        </div>
      ))}
    </div>
    </MainLayout>)
}

export default Home;
