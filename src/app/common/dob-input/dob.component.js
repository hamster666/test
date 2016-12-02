import templateUrl from './dob.html';

export const DobComponent = {
	bindings: {
		placeholder: '<'
	},
	templateUrl,
	controller: class DobComponent {
		constructor(){
			'ngInject';
		}
		$onInit(){
        	this.what = "I am a string from the DOB controller";
		}
	}
}