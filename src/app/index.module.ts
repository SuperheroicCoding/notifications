import { config } from './index.config';
import { routerConfig, RouterController } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { createNavbarDirective } from '../app/components/navbar/navbar.directive';
import { createOverlayDirective} from '../app/components/overlay/overlay.directive';
import { createNotificationDirective} from '../app/components/notifications/notification.directive';
import {NotificationService} from './components/notifications/notification.service';
import {NotificationController} from "./components/notifications/notification.controller";

declare var moment:moment.MomentStatic;

module sokoNotifications {
  'use strict';

  angular.module('sokoNotifications', ['ngAnimate', 'ngNewRouter', 'ngMaterial', 'toastr'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('RouterController', RouterController)
    .controller('MainController', MainController)
    .service('NotificationService', NotificationService)
    .directive('sokoNavbar', createNavbarDirective)
    .directive('sokoOverlay', createOverlayDirective)
    .controller('NotificationController', NotificationController)
    .directive('sokoNotification', createNotificationDirective);
}
