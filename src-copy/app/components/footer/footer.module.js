'use strict';

import * as footerDirective from './footer.directive';
import './footer.scss';

const footerModule = angular.module('footer-module', []);

footerModule
  .directive('appFooter', footerDirective);

export default footerModule;
