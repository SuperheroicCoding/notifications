import { MainController } from './main.controller';
import {NotificationService} from '../components/notifications/notification.service';

describe('controllers', () => {
  let mainController: MainController;
  let notificationService: NotificationService;

  beforeEach(angular.mock.module('sokoNotifications'));
  beforeEach(inject(($controller: ng.IControllerService, _NotificationService_: NotificationService) => {
    mainController = $controller<MainController>('MainController');
    notificationService = _NotificationService_;
    spyOn(notificationService, 'addNotification');
    spyOn(notificationService, 'removeNotification');
  }));

  it('should have a timestamp creation date', () => {
    expect(mainController.creationDate > 0).toBeTruthy();
  });

  it('should have a notification object', () => {
    expect(mainController.notification).toBeDefined();
  });

  it('should have a categoryOptions array with 3 entries', () => {
    expect(mainController.categoryOptions).toBeDefined();
    expect(mainController.categoryOptions.length).toBe(3);
  });

  it('should call NotificationService addNotification if invoke showNotification()', () => {
    mainController.notification.category = 'info';
    mainController.showNotification();
    expect(notificationService.addNotification).toHaveBeenCalled();
  });

  it('should not call NotificationService category is undefined', () => {
    mainController.notification.category = '';
    mainController.showNotification();
    expect(notificationService.addNotification).not.toHaveBeenCalled();
  });
});
