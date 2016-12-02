'use strict'

import template from './content.html'

export default [function () {
  return {
    restrict: 'AE',
    replace: true,
    require: '^slipit',
    transclude: true,
    link () {

    },
    template
  }
}]
