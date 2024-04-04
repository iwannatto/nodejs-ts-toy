import { Table, Model, Column, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from './user';

@Table
export class Post extends Model {
    @ForeignKey(() => User)
    @Column
    user_id!: number;

    @BelongsTo(() => User)
    user!: User;

    @Column
    content!: string;
}

