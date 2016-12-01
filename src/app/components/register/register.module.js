import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { RegisterComponent } from './register.component';
import './register.scss';

export const RegisterModule = angular
.module('register', [
    uiRouter
])
.component('register', RegisterComponent)
.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
    .state('register', {
        url: '/register',
        component: 'register',
        templateUrl: '/app/components/register/register.html'
    });
    $urlRouterProvider.otherwise('/');
})
.name;