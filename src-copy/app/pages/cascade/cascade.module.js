'use strict';

import * as route from './cascade.route';

const cascadePageModule = angular.module('cascade-module', [
  'ui.router'
]);

cascadePageModule
    .config(route);

export default cascadePageModule;
