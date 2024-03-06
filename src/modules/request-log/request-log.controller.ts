import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { RequestLogService } from './request-log.service';
import { RequestLog } from './request-log.model';

@Controller('request-logs')
export class RequestLogController {
  constructor(private readonly requestLogService: RequestLogService) {}

  @Get()
  async findAll(): Promise<RequestLog[]> {
    return this.requestLogService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<RequestLog> {
    const log = await this.requestLogService.findById(id);
    if (!log) {
      throw new NotFoundException('Request log not found');
    }
    return log;
  }

  @Post()
  async create(@Body() requestLogData: RequestLog): Promise<RequestLog> {
    return this.requestLogService.create(requestLogData);
  }
}
