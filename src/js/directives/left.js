'use strict'

import template from './left.html'

export default [function () {
  return {
    restrict: 'AE',
    replace: true,
    require: '^slipit',
    transclude: true,
    link (scope, elem, attrs, ctrl) {

    },
    template
  }
}]
