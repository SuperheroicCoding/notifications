import {INotification} from "./notification.service";
import {NotificationService} from "./notification.service";
import {NotificationController} from "./notification.controller";
/**
 *
 *
 * creates the sokoNotification directive that
 * shows the title text and category of a notification.#
 * Also it provides a remove icon button
 *
 * ### Usage example
 *     <soko-notification notification="myNotification">
 *     </soko-notification>
 *
 * @ngInject */
export function createNotificationDirective():ng.IDirective {

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'app/components/notifications/notification.html',
    controller: 'NotificationController',
    controllerAs: 'vm',
    bindToController: {
      notification: '='
    },
  };

}


