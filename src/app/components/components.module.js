import angular from 'angular';
import { RegisterModule } from './register/register.module';

export const ComponentsModule = angular
  .module('app.components', [
  	RegisterModule
  ])
  .name;