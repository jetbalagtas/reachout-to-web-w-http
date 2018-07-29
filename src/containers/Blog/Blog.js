import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // there seems to be too many posts from our demo REST server
        // in a real application, you can send some query parameters to your backend to restrict the amount of data retrieved, basically pagination
        // alternatively, we can also transform the data when we have it, like so:
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          }
        });
        this.setState({posts: updatedPosts});
        // console.log(response);
      });
  }

  render () {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} author={post.author} />;
    });

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
