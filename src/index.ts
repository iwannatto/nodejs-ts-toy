import express from 'express';
const { Sequelize } = require('sequelize-typescript');
import 'dotenv/config';

import { User } from './models/user';
import { FollowRelations } from './models/follow_relations';
import { Post } from './models/post';

import userController from './controllers/users';
import followRelationsController from './controllers/follow_relations';
import postController from './controllers/posts';

const app: express.Express = express();

// const sequelize = new Sequelize(
//     process.env.DATABASE,
//     process.env.MYSQL_USER,
//     process.env.MYSQL_PASSWORD,
//     {
//         dialect: 'mysql',
//         models: [User, FollowRelations, Post],
//     }
// );
const sequelize = new Sequelize(
    process.env.MYSQL_URI,
    {models: [User, FollowRelations, Post]},
);

const asyncFunc = async(): Promise<void> => {
    try {
        await sequelize.sync();
        await sequelize.authenticate();
        console.log("success");
    } catch (error) {
        console.error('fail', error);
    }    
}
asyncFunc();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userController);
app.use('/follow_relations', followRelationsController);
app.use('/posts', postController);

app.listen(5000, () => {
    console.log('Start on PORT:5000!');
})