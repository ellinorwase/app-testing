import SinglePost from "../components/SinglePost";
import fakePosts from "../fakePosts";
import React from 'react';
import { shallow, mount } from 'enzyme';
import Index from '../api/index';

beforeEach(() => {
  jest.resetModules();
});

const postsInLocalStorage = localStorage.getItem('posts');
if(!postsInLocalStorage){
  localStorage.setItem('posts', JSON.stringify(fakePosts.data));
}

test("get all posts", () => {
  const posts = require("../api/index");
  posts.fetchAllPosts();
  expect(posts.fetchAllPosts()).toHaveLength(3);
});

test('remove a post', () => {
    const postList = require('../api/index');
    postList.removePost("56tytd234");
    expect(postList.fetchAllPosts()).toHaveLength(2);
});

// test("get all comments", () => {
//   const posts = require("../api/index");
//   posts.fetchAllComments();
//   expect(posts.fetchAllComments()).toHaveLength(0);
// });

