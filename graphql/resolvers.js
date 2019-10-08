const { Candidate, User } = require('../db/models');

const resolvers = {
  Query: {
    candidates: (_, args) => {
      return Candidate.find(args);
    },
    candidate: (_, args) => {
      return Candidate.findOne(args)
    },
    user: (_, args) => {
      return User.findOne(args)
    }
  },
  //   Author: {
  //     posts(author) {
  //       return Post.find({author});
  //     },
  //   },
  //   Post: {
  //     author(post) {
  //       return Author.findById(post.author);
  //     },
  //   },
  // Mutation: {
    // async createAuthor(_, {input}) {
    //   const count = await Author.count();
    //   const author = new Author({
    //     id: count + 1,
    //     ...input,
    //   });
    //   await author.save();
    //   return author.toObject();
    // },
    // async createPost(_, {input}) {
    //   const author = await Author.findOne({id: input.author});
    //   const count = await Post.count();
    //   const post = new Post({
    //     ...input,
    //     author: author._id,
    //     id: count + 1,
    //   });
    //   await post.save();
    //   return post.toObject();
    // },
  // },
};

module.exports = resolvers;
