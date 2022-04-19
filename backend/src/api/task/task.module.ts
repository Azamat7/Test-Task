import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { S3Module } from '../helpers/s3/s3.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), S3Module],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
