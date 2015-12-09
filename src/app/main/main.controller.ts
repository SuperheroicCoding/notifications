import {INotification, Notification, NotificationService} from '../components/notifications/notification.service';

/**
 * the main controller to add an notification to the NotificationService
 */
export class MainController {
  public creationDate: number;
  public notification: INotification = new Notification(undefined, undefined, 'info');
  public categoryOptions: string[] = ['info', 'warning', 'error'];

  /* @ngInject */
  constructor(private NotificationService: NotificationService) {
    this.activate();
  }

  activate() {
    this.creationDate = 1449161095787;
  }

  showNotification() {
    if (this.notification.category) {
      var newNotification = new Notification(this.notification.text,this.notification.title,this.notification.category);
      this.NotificationService.addNotification(newNotification);
    }
  }
}
