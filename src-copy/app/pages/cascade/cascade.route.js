'use strict';

import cascadeTpl from './cascade.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('cascade', {
      url: '/cascade',
      templateUrl: cascadeTpl,
      controller: require('./cascade.controller'),
      controllerAs: 'cascade'
    });

}

export default routeConfig;
