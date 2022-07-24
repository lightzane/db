import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post(':dbname')
  post(@Body() data: any, @Param('dbname') name: string): any {
    return this.appService.post(name, data);
  }

  @Get(':dbname')
  get(@Param('dbname') name: string): any {
    return this.appService.db[name] || [];
  }

  @Get()
  getHello(): any {
    return {
      endpoint: 'https://lightzane-db.herokuapp.com/<YOUR_COLLECTION_NAME_HERE>',
      inserData: 'Insert data by calling a POST request and pass the data object in the BODY',
      getData: 'Retrieve the data by calling a GET request'
    }
  }
}
