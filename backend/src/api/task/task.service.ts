import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './task.dto';
import { Task } from './task.entity';
import { S3Service } from './s3.service';


@Injectable()
export class TaskService {
  @Inject(ConfigService)
  private readonly config: ConfigService;

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

    const bucket = this.config.get<string>('AWS_S3_BUCKET');
    const access_key = this.config.get<string>('AWS_S3_ACCESS_KEY');
    const key_secret = this.config.get<string>('AWS_S3_SECRET_KEY');
    const s3_service = new S3Service(bucket, access_key, key_secret)
    const uploadedFile = await s3_service.uploadFile(file);
    console.log('complete...');
    console.log('uploaded_file:', uploadedFile);

    task.image_url = uploadedFile;

    return this.repository.save(task);
  }
}
