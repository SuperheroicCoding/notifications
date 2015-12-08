import {INotification, Notification, NotificationService} from '../components/notifications/notification.service'

export class MainController {
  public creationDate:number;
  public notification:INotification = new Notification(undefined, undefined, 'info');
  public lastNotification:INotification;
  public categoryOptions:string[] = ['info', 'warning', 'error'];

  /* @ngInject */
  constructor(private toastr:Toastr, private NotificationService:NotificationService) {
    this.activate();
  }

  activate() {
    this.creationDate = 1449161095787;
  }

  showNotification() {
    if (typeof this.notification.category !== 'undefined') {
      this.lastNotification = this.notification;
      this.NotificationService.addNotification(this.notification);
    }
  }
}
