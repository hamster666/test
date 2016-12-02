import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CascadeComponent } from './cascade.component';

export const CascadeModule = angular
.module('cascade', [
    uiRouter
])
.component('cascade', CascadeComponent)
.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
    .state('cascade', {
        url: '/cascade',
        component: 'cascade',
        templateUrl: '/app/components/cascade/cascade.html'
    });
    $urlRouterProvider.otherwise('/');
})
.name;