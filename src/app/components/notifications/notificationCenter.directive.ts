/**
 * creates the sokoNotificationCenter directive that
 * shows a list of all current notifications.
 * if there are more than 5 notifications they get concatenated
 *
 * ### Usage example
 *     <soko-notification-center>
 *     </soko-notification>
 *
 *
 * @ngInject
 */
export function createNotificationCenterDirective(): ng.IDirective {

  return {
    restrict : 'E',
    scope : true,
    templateUrl : 'app/components/notifications/notificationCenter.html',
    controller : 'NotificationCenterController',
    controllerAs : 'vm',
  };

}


