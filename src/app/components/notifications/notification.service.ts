export interface INotification {
  title: string;
  text: string;
  category: string;
}

export class Notification implements INotification {

  constructor(public title: string, public text: string, public category: string) {
  }
}
/**
 * This class is responsible for storing notifications removiong them after a timeout
 */
export class NotificationService {
  public static DEFAULT_TIMEOUT = 15000;
  private static MAX_NOTIFICATIONS = 5;
  public notifications: INotification[] = [];

  /** @ngInject */
  constructor(private $timeout: ng.ITimeoutService, private $rootScope: ng.IRootScopeService) {
  }


  /**
   * adds a notification to the notifications. Newest notification at first position
   * starts a timer that removes the notification after DEFAULT_TIMEOUT
   *
   * @param notification to add
   */
  addNotification(notification: INotification) {
    this.notifications = [notification].concat(this.notifications);
    console.log('SERVICE', this.notifications);
    this.$timeout(() => this.removeNotification(notification), NotificationService.DEFAULT_TIMEOUT);
    this.$rootScope.$broadcast('sokoNotificationChanged');
  }

  removeNotification(notification: INotification) {
    this.notifications = this.notifications.filter((elem: INotification) => elem !== notification);
    this.$rootScope.$broadcast('sokoNotificationChanged');
  }
}
