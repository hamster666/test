import angular from 'angular';
import { EmailInputComponent } from './email-input.component';

export const EmailInputModule = angular
	.module('emailInput', [])
	.component('emailInput', EmailInputComponent)
	.name;