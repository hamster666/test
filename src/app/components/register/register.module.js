import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { RegisterComponent } from './register.component';
import { CommonModule } from '../../common/common.module';

export const RegisterModule = angular
.module('register', [
    uiRouter
])
.component('register', RegisterComponent)
.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    
    console.log(RegisterComponent);

    $stateProvider
    .state('register', {
        url: '/register',
        component: 'register',
        templateUrl: '/app/components/register/register.html'
    });
    $urlRouterProvider.otherwise('/');
})
.name;