import angular from 'angular';
import { DobComponent } from './dob.component';

export const DobModule = angular
.module('dob',[])
.component('dobInput', DobComponent)
.name;