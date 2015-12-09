import {Notification} from './notification.service';
import {NotificationService} from './notification.service';
import IControllerService = angular.IControllerService;
import {NotificationController} from './notification.controller';

describe('Notification Controller', () => {

  let notificationController: NotificationController;
  let notificationService: NotificationService;
  let notification;

  beforeEach(angular.mock.module('sokoNotifications'));
  beforeEach(inject(($controller: IControllerService, _NotificationService_: NotificationService) => {

    notification = new Notification('title', 'text', 'info');
    notificationService = _NotificationService_;
    spyOn(notificationService, 'removeNotification');
    notificationController = $controller<NotificationController>('NotificationController',
      {NotificationService : notificationService},
      {notification : notification});
  }));

  it('should be defined', () => {
    expect(notificationController).toBeDefined();
  });

  it('should have a notification bound to controller', () => {
    expect(notificationController.notification).toBe(notification);
  });

  it('should call NotificationService.removeNotification on removeNotification', () => {
    notificationController.removeNotification();
    expect(notificationService.removeNotification).toHaveBeenCalledWith(notification);
  });
});
