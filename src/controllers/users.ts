import express, { Router } from 'express';
import { FollowRelations } from '../models/follow_relations';
import { User } from '../models/user';

const router: Router = express.Router();

router.get('/', (req, res) => {
    (async() => {
        let users = await User.findAll();
        res.status(200).json(users);
    })();
})

router.post('/create', (req, res) => {
    (async() => {
        let user = await User.create(req.body);    
        res.status(201).json(user);
    })();
});

router.get('/:id', (req, res) => {
    (async() => {
        let user = await User.findOne({where: {id: req.params.id}});
        res.status(200).json(user);    
    })();
});

router.get('/:id/followees', (req, res) => {
    (async() => {
        let user = await User.findOne({
            where: {id: req.params.id},
            include: {model: FollowRelations, as: 'followees'},
        });
        if (user === null) {
            console.log('user is null');
            res.status(404).json({});
        }
        res.status(200).json(user?.followees);
    })();
});

router.get('/:id/followers', (req, res) => {
    (async() => {
        let user = await User.findByPk(
            req.params.id,
            {include: {model: FollowRelations, as: 'followers'}},
        );
        if (user === null) {
            console.log('user is null');
            res.status(404).json({});
        }
        res.status(200).json(user?.followers);
    })();
});

router.patch('/update/:id', (req, res) => {
    (async() => {
        let user = await User.findByPk(req.params.id);
        user?.update(req.body);
        res.status(200).json(user);
    })();
});

router.delete('/delete/:id', (req, res) => {
    (async() => {
        let user = await User.findByPk(req.params.id);
        let result = user?.destroy();
        res.status(200).json(result);
    })();
});

export default router;