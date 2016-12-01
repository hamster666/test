import { templateUrl } from './register.html';

export const RegisterComponent = {
    templateUrl,
    controller: class RegisterComponent {
        constructor() {
            'ngInject'; 
        }
        $onInit() {
            this.newTodo = {
                title: '',
                selected: false
            };
        }
    }
};