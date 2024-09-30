import { Project } from "src/projects/entities/projects.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "firstName", nullable: false })
    firstName: string;

    @Column({ name: "lastName" })
    lastName: string;

    @Column({ name: "email", nullable: false })
    email: string;

    @Column({ name: "password", nullable: false })
    password: string;

    @OneToMany(() => Project, (project) => project.user)
    projects: Project[];

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];
    
}
