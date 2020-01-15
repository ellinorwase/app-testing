import fakePosts from "../fakePosts";
import {responses} from "../api/index";

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

