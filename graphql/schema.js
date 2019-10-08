const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
    type Query {
        user(id: ID!): User
        candidate(id: ID!): Candidate
        candidates(limit: Int): [Candidate]!
    }

    type User {
        firstName: String!
        lastName: String!
        email: String!
    }

    type Candidate {
        description: String!
    }

    # type Tweet {
    #     id: ID!
    #     # The tweet text. No more than 140 characters!
    #     body: String
    #     # When the tweet was published
    #     date: Date
    #     # Who published the tweet
    #     Author: User
    #     # Views, retweets, likes, etc
    #     Stats: Stat
    # }

    # type User {
    #     id: ID!
    #     username: String
    #     first_name: String
    #     last_name: String
    #     full_name: String
    #     name: String @deprecated
    #     avatar_url: Url
    # }

    # type Stat {
    #     views: Int
    #     likes: Int
    #     retweets: Int
    #     responses: Int
    # }

    # type Notification {
    #     id: ID
    #     date: Date
    #     type: String
    # }

    # type Meta {
    #     count: Int
    # }

    # scalar Url
    # scalar Date

    # type Query {
    #     Tweet(id: ID!): Tweet
    #     Tweets(
    #         limit: Int
    #         skip: Int
    #         sort_field: String
    #         sort_order: String
    #     ): [Tweet]
    #     TweetsMeta: Meta
    #     User(id: ID!): User
    #     Notifications(limit: Int): [Notification]
    #     NotificationsMeta: Meta
    # }

    # type Mutation {
    #     createTweet(body: String): Tweet
    #     deleteTweet(id: ID!): Tweet
    #     markTweetRead(id: ID!): Boolean
    # }
`;

module.exports = makeExecutableSchema({typeDefs, resolvers});