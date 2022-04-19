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

  public getTask(id: number): Promise<Task> {
    return this.repository.findOne(id);
  }

  // public createTask(body: CreateTaskDto): Promise<Task> {
  //   const task: Task = new Task();
  //   task.name = body.name;
  //   task.image_url = body.image_url;

  //   return this.repository.save(task);
  // }

  public async createTask(body: CreateTaskDto, file:Express.Multer.File): Promise<Task> {
    const task: Task = new Task();
    task.name = body.name;
    
    console.log(file);
    console.log('uploading...');
    const uploadedFile = await this.S3Service.uploadFile(file);
    console.log('complete...');
    console.log('uploaded_file:', uploadedFile);

    task.image_url = uploadedFile;

    return this.repository.save(task);
  }
}
