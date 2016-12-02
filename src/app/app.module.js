import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';

import './app.scss';
import '../assets/styles/sass/main.scss';

export const AppModule = angular
.module('app', [
	ComponentsModule,
	CommonModule,
	uiRouter
	])
.component('app', AppComponent)
.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
    .state('home', {
        url: '/home',
        component: 'app',
        templateUrl: "/app/app.html"
    });
    $urlRouterProvider.otherwise('/home');
})
.name;
