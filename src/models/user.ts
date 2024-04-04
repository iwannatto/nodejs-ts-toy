import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { FollowRelations } from './follow_relations';
import { Post } from './post';

@Table
export class User extends Model {
    @Column
    name!: string;
    
    @Column
    profile!: string;

    @HasMany(() => FollowRelations, 'followee_id')
    followees!: FollowRelations[];

    @HasMany(() => FollowRelations, 'follower_id')
    followers!: FollowRelations[];

    @HasMany(() => Post)
    posts!: Post[];
}

