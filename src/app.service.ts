import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NEST!';
  }
  getNest(): string {
    return 'GET NEST';
  }
}
