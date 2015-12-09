import {Notification} from './notification.service';
import {NotificationService} from './notification.service';
import ITimeoutService = angular.ITimeoutService;

describe('Notification Controller', () => {

  let notificationService: NotificationService;
  let $timeout : ITimeoutService;

  beforeEach(angular.mock.module('sokoNotifications'));
  beforeEach(inject((_$timeout_: ITimeoutService, _NotificationService_: NotificationService) => {
    $timeout = _$timeout_;
    notificationService = _NotificationService_;
  }));

  it('should be defined', () => {
    expect(notificationService).toBeDefined();
  });

  it('should have a notifications array defined', () => {
    expect(notificationService.notifications).toBeDefined();
  });

  it('should add a new notification to array', () => {
    let notification = new Notification('title', 'text', 'info');
    notificationService.addNotification(notification);
    expect(notificationService.notifications[0]).toBe(notification);
    expect(notificationService.notifications.length).toBe(1);
  });


  it('should have added a new notification at first position', () => {
    let notification1 = new Notification('title1', 'text1', 'info1');
    notificationService.addNotification(notification1);
    let notification2 = new Notification('title2', 'text2', 'info2');
    notificationService.addNotification(notification2);
    expect(notificationService.notifications[0]).toBe(notification2);
    expect(notificationService.notifications[1]).toBe(notification1);
  });

  it('should remove added notification after a while', () => {
    let notification = new Notification('title', 'text', 'info');
    notificationService.addNotification(notification);
    $timeout.flush(14999);
    expect(notificationService.notifications.length).toBe(1);
    $timeout.flush(1);
    expect(notificationService.notifications.length).toBe(0);
    $timeout.verifyNoPendingTasks();

  });

  it('should removeNotification from array on removeNotification', () => {
    let notification = new Notification('title', 'text', 'info');
    notificationService.addNotification(notification);
    notificationService.removeNotification(notification);
    expect(notificationService.notifications.length).toBe(0);
  });
});
