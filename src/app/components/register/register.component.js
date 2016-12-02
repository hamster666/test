import templateUrl from './register.html';

export const RegisterComponent = {
    bindings: {
    },
    templateUrl,
    controller: class RegisterComponent {
        constructor() {
            'ngInject'; 
            console.log('hello from register');
        }
        $onInit() {
            this.testing = "hello hello"
        }
    }
};