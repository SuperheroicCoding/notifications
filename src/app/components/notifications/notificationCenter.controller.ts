import {INotification} from './notification.service';
import {NotificationService} from './notification.service';
/**
 * controller for the sokoNotificationCenter directive that shows the list of notifications
 * from the NotificationService
 * To many notifications get stacked on the 5th element
 */
export class NotificationCenterController {
  /**
   * the notifications to show
   */
  public notifications: INotification[] = [];

  /** @ngInject */
  constructor(private $scope: ng.IScope, private NotificationService: NotificationService) {
    $scope.$on('sokoNotificationChanged', () => {
      console.log('EVENT', NotificationService.notifications,this);
      this.notifications = NotificationService.notifications;
    });
    this.notifications = NotificationService.notifications;
  }
}
