import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ unique: true })

    email!: string;

    @Column()
    password!: string;

    // @OneToMany(() => Collaboration, collaboration => collaboration.user)
    // collaborations: Collaboration[];
}