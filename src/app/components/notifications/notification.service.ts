export interface INotification {
  title: string;
  text: string;
  category: string;
}

export class Notification implements INotification {
  constructor(public title:string, public text:string, public category:string) {
  }
}
/**
 * This class is responsible for storing notifications
 */
export class NotificationService {

  public notifications:INotification[] = [];
  private static DEFAULT_TIMEOUT = 15000;
  private static MAX_NOTIFICATIONS = 5;

  /** @ngInject */
  constructor(private $timeout:ng.ITimeoutService) {
  }

  addNotification(notification:INotification) {
    this.notifications.push(notification);
    this.$timeout(() => this.removeNotification(notification), NotificationService.DEFAULT_TIMEOUT);
  }

  removeNotification(notification : INotification) {
    this.notifications = this.notifications.filter(elem => elem !== notification);
  }
}
