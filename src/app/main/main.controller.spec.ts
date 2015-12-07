import { MainController } from './main.controller';

describe('controllers', () => {
  let mainController:MainController;
  let toastr:Toastr;

  beforeEach(angular.mock.module('sokoNotifications'));
  beforeEach(inject(($controller:ng.IControllerService, _toastr_:Toastr) => {
    mainController = $controller<MainController>('MainController');
    toastr = _toastr_;
    spyOn(toastr, 'info').and.callThrough();
    spyOn(toastr, 'warning').and.callThrough();
    spyOn(toastr, 'error').and.callThrough();
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

  it('should call Toastr info if invoke showNotification() with notification category info', () => {
    // catgoryOptions[0] === 'info'
    mainController.notification.category = mainController.categoryOptions[0].key;
    mainController.showNotification();
    expect(toastr.info).toHaveBeenCalled();
  });
});
