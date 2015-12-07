import {Notification, INotification} from "./notification";

class NotificationWithCreationTime extends Notification {

  public timestamp:number;

  constructor(notification:INotification) {
    super(notification.title, notification.text, notification.category);
    this.timestamp = new Date().getTime();
  }
}

export class NotificationService {

  public notifications:Notification[] = [];

  constructor(private $timeout:ng.ITimeoutService) {
    (<any>Object).observe(this.notifications, (changes) => {
      console.log(changes);
    })
  }

  addNotification(notification:INotification) {
    var notificationWithCreationTime = new NotificationWithCreationTime(notification);
    this.notifications.push(notificationWithCreationTime);
  }

  removeNotification(arg:number | Notification) {
    var index;

    if (typeof arg === 'number') {
      index = arg;
    }
    if (arg instanceof Notification) {
      index = this.notifications.indexOf(arg);
    }
    if (index > -1) {
      this.notifications.splice(index);
    }
  }
}
