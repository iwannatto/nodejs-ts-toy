import express, { Router } from 'express';
import { Post } from '../models/post';

const router: Router = express.Router();

router.get('/', (req, res) => {
    (async() => {
        let posts = await Post.findAll();
        res.status(200).json(posts);
    })();
});

router.post('/create', (req, res) => {
    (async() => {
        let post = await Post.create(req.body);    
        res.status(201).json(post);
    })();
});

router.get('/:id', (req, res) => {
    (async() => {
        let post = await Post.findByPk(req.params.id);
        res.status(200).json(post);
    })();
});

router.patch('/update/:id', (req, res) => {
    (async() => {
        let post = await Post.findByPk(req.params.id);
        post?.update(req.body);
        res.status(200).json(post);
    })();
});

router.delete('/delete/:id', (req, res) => {
    (async() => {
        let post = await Post.findByPk(req.params.id);
        let result = post?.destroy();
        res.status(200).json(result);
    })();
});

export default router;