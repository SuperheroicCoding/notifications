/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig, RouterController } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import {NotificationService} from "./components/notifications/notification.service";

declare var moment: moment.MomentStatic;

module sokoNotifications {
  'use strict';

  angular.module('sokoNotifications', ['ngAnimate', 'ngNewRouter', 'ngMaterial', 'toastr'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('RouterController', RouterController)
    .controller('MainController', MainController)
    .service('NotificationService',NotificationService)
    .directive('acmeNavbar', acmeNavbar)
}
