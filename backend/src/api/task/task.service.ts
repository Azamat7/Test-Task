import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './task.dto';
import { Task } from './task.entity';
import { S3Service } from '../helpers/s3/s3.service';


@Injectable()
export class TaskService {
  @Inject(S3Service)
  private readonly S3Service: S3Service;

  @InjectRepository(Task)
  private readonly repository: Repository<Task>;

  public getTasks(): Promise<Task[]> {
    return this.repository.find();
  }

  public getTask(id: number): Promise<Task> {
    return this.repository.findOne(id);
  }

  public async createTask(body: CreateTaskDto, file:Express.Multer.File): Promise<Task> {
    const task: Task = new Task();
    task.name = body.name;
    task.image_url = await this.S3Service.uploadFile(file);

    return this.repository.save(task);
  }
}
