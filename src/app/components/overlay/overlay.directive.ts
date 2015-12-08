/**
 * just a full size overlay. with transparent background.
 * Place your overlay elements inside the overlay e.g.
 *
 * ### Example
 * ```
 * <overlay>
 *     <div>This will be shown on the overlay<div>
 * </overlay>
 * ```
 *
 @ngInject */
export function createOverlayDirective():angular.IDirective {

  return {
    restrict: 'E',
    template: '<div layout layout-fill layout-align="end end" class="overlayContainer"><ng-transclude></ng-transclude></div>',
    transclude: true
  };
}

export class OverlayCmp {
}
