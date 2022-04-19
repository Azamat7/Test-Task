import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateTaskDto } from './task.dto';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  @Inject(TaskService)
  private readonly service: TaskService;

  @Get()
  public getTasks(): Promise<Task[]> {
    return this.service.getTasks();
  }

  @Get(':id')
  public getTask(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.service.getTask(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createTask(@Body() body: CreateTaskDto, @UploadedFile() file: Express.Multer.File) {
    return this.service.createTask(body, file);
  }
}