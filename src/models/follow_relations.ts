import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user';

@Table
export class FollowRelations extends Model {
    @ForeignKey(() => User)
    @Column
    followee_id!: number;

    @BelongsTo(() => User)
    followee!: User;

    @ForeignKey(() => User)
    @Column
    follower_id!: number;

    @BelongsTo(() => User)
    follower!: User;
}

