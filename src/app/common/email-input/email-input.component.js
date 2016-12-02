import templateUrl from './email-input.html'

export const EmailInputComponent = {
	bindings: {
		placeholder: '<'
	},
	templateUrl,
	controller: class EmailInputComponent {
		constructor(){
			'ngInject';
		}

		$onInit(){
		}
	}	
}