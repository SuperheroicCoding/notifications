import {INotification} from './notification.service';
import {NotificationService} from './notification.service';
/**
 * controller for the sokoNotification.
 */
export class NotificationController {
  /**
   * the notification to show
   */
  public notification:INotification; // bindToController

  /** @ngInject */
  constructor(private NotificationService:NotificationService) {
  }

  /**
   * remove this.notification from NotificationService
   */
  onClickRemove() {
    this.NotificationService.removeNotification(this.notification);
  }
}
