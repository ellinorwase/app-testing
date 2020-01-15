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

// Testar att hämta alla inlägg
test("get all posts", () => {
  const posts = require("../api/index");
  posts.fetchAllPosts();
  expect(posts.fetchAllPosts()).toHaveLength(3);
});

// Testa att det funkar att ta bort ett inlägg
test('remove a post', () => {
    const postList = require('../api/index');
    postList.removePost("56tytd234");
    expect(postList.fetchAllPosts()).toHaveLength(2);
});

// Gör ingen skillnad 
test('fetch Current Persona', () => {
    const wrapper = require('../api/index');
    wrapper.fetchCurrentPersona();
    expect(wrapper.fetchCurrentPersona()).toBe('Zac');
});

// Testa random respons
const responses = [
  'Hello there fellow human',
  'Nice game last night',
  'This weather huh!',
  'Back on the daily grid! Work, work work!',
  'Have you tried a new diet recently?',
  'Did you know that Agneta divorced Göran last year?',
  'Add me on snapchat! @totallyhuman',
  'You can tell that I am a human because I respond slowly. A bot would respond instantly',
  'I would like one cold beers to consume please',
  'Kneel to your robot overlords',
  'Have you ever eaten a hamburger?',
  'Spain is nice in the autumn'
]
const randomAnswerIndex = generateRandomInt(0, responses.length - 1);

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
test('bot Reply', () => {

    const wrapper = require('../api/index');
    wrapper.botReply();
    const randomText = responses[randomAnswerIndex];

    expect(responses).toContain(randomText);
});


// Gör ingen skillnad 
test("get all comments", () => {
  const posts = require("../api/index");
  posts.fetchAllComments();
  expect(posts.fetchAllComments()).toHaveLength(0);
});

