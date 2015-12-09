import {INotification} from './notification.service';
import {NotificationService} from './notification.service';
/**
 * controller for the sokoNotification directive.
 */
export class NotificationController {
  /**
   * the notification to show
   */
  public notification: INotification; // bindToController

  /** @ngInject */
  constructor(private NotificationService: NotificationService) {
  }

  /**
   * remove this.notification from NotificationService
   */
  removeNotification() {
    this.NotificationService.removeNotification(this.notification);
  }
}
