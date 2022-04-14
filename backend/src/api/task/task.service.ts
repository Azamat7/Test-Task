import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  @InjectRepository(Task)
  private readonly repository: Repository<Task>;

  public getTask(id: number): Promise<Task> {
    return this.repository.findOne(id);
  }

  public createTask(body: CreateTaskDto): Promise<Task> {
    const task: Task = new Task();

    task.name = body.name;
    task.image_url = body.image_url;

    return this.repository.save(task);
  }
}