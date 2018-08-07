import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
    auth: false
  }

  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink // the key takeaway is that the NavLink automatically attaches the 'active' class
                to='/posts/'
                exact
                activeClassName='my-active' // but you can also use a custom class
                activeStyle={{ // or you can also use inline styling
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}>Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post', // absolute path. relative path: this.props.match.url + '/new-post'
                hash: '#submit', // example if setting up the path
                search: '?quick-submit=true' // example if setting up the path
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/' render={() => <h1>Home 2</h1>} /> */}
        <Switch>
          {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null}
          <Route path='/posts' component={Posts} />
          <Redirect from='/' to='/posts' />
          {/* <Route path='/' component={Posts} /> */}
          {/* <Route path='/:id' exact component={FullPost} /> */}
        </Switch>
        {/* instead of altering the path for example to path='/posts/:id', you can simply use Switch which loads one route at a time */}
      </div>
    );
  }
}

export default Blog;
