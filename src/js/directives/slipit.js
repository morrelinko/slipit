'use strict'

import $ from 'jquery'
import Hammer from 'hammer'
import template from './slipit.html'

export default [function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      height: '@height',
      release: '=release'
    },
    controller () {

    },
    link: function (scope, elem, attrs, ctrl) {
      console.log(scope.height, scope.release)
      let $elem = $(elem[0])
      let $wrap = $elem.find('.slipit__wrap')
      let $left = $elem.find('.slipit__left')
      let $right = $elem.find('.slipit__right')

      let maxW = $wrap.width()
      let mv = new Hammer(elem[0], {})

      $elem.height(scope.height)
      $left.css({left: -(maxW + 30), width: maxW})
      $right.css({right: -(maxW + 30), width: maxW})

      mv.on('panstart', function (ev) {

      })

      mv.on('panend', function (ev) {
        $wrap.css({transform: 'translateX(0px)'})
      })

      mv.on('pan', function (ev) {
        if ((ev.center.x >= ($elem.offset().left + maxW)) ||
          (ev.center.x <= $elem.offset().left)) {
          if (scope.release) {
            $wrap.css({transform: 'translateX(0px)'})
          }

          return void 0
        }

        if (ev.deltaX < 0) {
          $wrap.css({transform: 'translateX(-' + Math.abs(ev.deltaX) + 'px)'})
        } else if (ev.deltaX >= 0) {
          $wrap.css({transform: 'translateX(' + Math.abs(ev.deltaX) + 'px)'})
        }
      })

      elem.on('$destroy', function () {
        console.log('destroying element')
        mv = null
      })
    },
    template
  }
}]
