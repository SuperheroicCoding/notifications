import IToastPreset = angular.material.IToastPreset;
import IToastService = angular.material.IToastService;
/** @ngInject */
export function config($logProvider:angular.ILogProvider, toastrConfig:ToastrOptions, $mdThemingProvider:ng.material.IThemingProvider) {
  // enable log
  $logProvider.debugEnabled(true);
  // set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.closeButton = true;
  toastrConfig.timeOut = 90000;
  toastrConfig.positionClass = 'toast-bottom-right';
  toastrConfig.preventDuplicates = false;
  toastrConfig.newestOnTop = true;
  toastrConfig.progressBar = true;
  $mdThemingProvider.theme('default').primaryPalette('pink').accentPalette('purple');
}
