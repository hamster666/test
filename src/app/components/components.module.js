import angular from 'angular';
import { RegisterModule } from './register/register.module';
import { CascadeModule } from './cascade/cascade.module';
import { InputsModule } from './cascade/cascade.module';

export const ComponentsModule = angular
  .module('app.components', [
  	RegisterModule,
  	CascadeModule
  ])
  .name;