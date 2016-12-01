import { templateUrl } from './register.html';

export const RegisterComponent = {
    templateUrl,
    controller: class RegisterComponent {
        constructor() {
            'ngInject'; 
            console.log('yo yo');
        }
        $onInit() {
            console.log('YO YO ');

            this.newTodo = {
                title: '',
                selected: false
            };
        }
    }
};