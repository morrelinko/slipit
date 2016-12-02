'use strict'

import angular from 'angular'

import './scss/slipit.scss'

import slipitItem from './js/directives/slipit'
import slipitLeft from './js/directives/left'
import slipitRight from './js/directives/right'
import slipitContent from './js/directives/content'

angular.module('moSlipit', [])
  .directive('slipit', slipitItem)
  .directive('slipitLeft', slipitLeft)
  .directive('slipitRight', slipitRight)
  .directive('slipitContent', slipitContent)
