import IThemingProvider = angular.material.IThemingProvider;
/** @ngInject */
export function config($logProvider: angular.ILogProvider, $mdThemingProvider: IThemingProvider) {
  // enable log
  $logProvider.debugEnabled(true);
  $mdThemingProvider.theme('default').primaryPalette('blue-grey').accentPalette('teal').warnPalette('red').backgroundPalette('grey').dark(true);
}
