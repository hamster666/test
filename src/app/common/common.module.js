import angular from 'angular';
import { DobModule } from './dob-input/dob.module';
import { EmailInputModule } from './email-input/email-input.module'

export const CommonModule = angular
  .module('app.common', [
  	DobModule,
  	EmailInputModule
  ])
  .name;