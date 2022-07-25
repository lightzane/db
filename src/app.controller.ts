import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { SwaggerRead, SwaggerCreate, SwaggerUpdate, SwaggerDelete } from './shared/decorators/swagger.decorator';
import { PostExample } from './shared/dto/post-example.dto';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { ObjectIdPipe } from './shared/pipes/object-id.pipe';


@Controller()
@UseFilters(HttpExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post(':collection')
  @SwaggerCreate()
  create(@Body() data: PostExample, @Param('collection') name: string): any {
    return this.appService.post(name, data);
  }

  @Get(':collection')
  @SwaggerRead()
  read(@Param('collection') name: string): any {
    return this.appService.db[name] || [];
  }

  @Patch(':collection')
  @SwaggerUpdate()
  update(@Body() data: PostExample, @Param('collection') collection: string): any {
    return this.appService.update(collection, data);
  }

  @Delete(':collection/:id')
  @SwaggerDelete()
  delete(@Param('collection') collection: string, @Param('id', new ObjectIdPipe()) id: string): any {
    return this.appService.delete(collection, id);
  }
}
