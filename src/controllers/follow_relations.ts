import express, { Router } from 'express';
import { FollowRelations } from '../models/follow_relations';

const router: Router = express.Router();

router.post('/create', (req, res) => {
    (async() => {
        let follow_relation_in_advance = await FollowRelations.findOne({
            where: {
                followee_id: req.body.followee_id,
                follower_id: req.body.follower_id,
            },
        });
        if (follow_relation_in_advance === null) {
            let follow_relation = await FollowRelations.create(req.body);
            res.status(201).json(follow_relation);
        } else {
            res.status(409).json({});
        }
    })();
});

router.get('/', (req, res) => {
    (async() => {
        let follow_relations = await FollowRelations.findAll();
        res.status(200).json(follow_relations);
    })();
});

router.delete('/delete/:id', (req, res) => {
    (async() => {
        let follow_relation = await FollowRelations.findByPk(req.params.id);
        let result = await follow_relation?.destroy();
        res.status(200).json(result);
    })();
});

export default router;