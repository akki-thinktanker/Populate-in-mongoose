const mongoose = require('mongoose');
const { User, Post } = require('./model');

mongoose
  .connect('mongodb://localhost:27017/populate')
  .then(() => console.log('Connected to db'))
  .catch((err) => console.error('error connecting to mongodb ', err));

const createUserData = async () => {
  await User.create({
    name: 'rudra',
    email: 'rudra@mail.com',
    age: 15,
  });
};

const createPostData = async () => {
  await Post.create({
    title: 'Post 3',
    content: 'content of post 3',
    author: '667404d10f438d879bcd1f1d',
  });
};

// createUserData();
// createPostData();

const getPostData = async () => {
  const PostData = await Post.find({}).populate('author').exec();

  console.log(PostData);
};

getPostData();
