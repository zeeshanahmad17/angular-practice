export class LoggingService {
  logStatus(status: string){
    console.log('A server status changed, new status: ' + status);
  }
}
