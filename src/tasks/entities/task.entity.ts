
import { Project } from "src/projects/entities/projects.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name", nullable: false})
  name: string;

  @Column({ name: "status", nullable: false })
  status: TaskStatus;

  @ManyToOne(() => Project, (project) => project.tasks, {
    cascade: true,
    nullable: false,
  })
    project: Project;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn()
  user: User;
}

export enum TaskStatus {
  pending = "pending",
  completed = "completed",
}
