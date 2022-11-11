import { InstallationUIAPI } from '../../domain/api/installation-api.ts';
import { UIClientAPI } from '../../domain/api/ui-api.ts';
import { ApplicationFeatures, ApplicationFeaturesEnum } from '../../domain/types/feature.type.ts';
import {
	Select,
	Checkbox,
	Confirm,
	Input,
	Number,
	prompt,
} from '../deps.ts';
import { logo } from './logo.ts'
/* ts */
export class CliffyCIHome implements UIClientAPI {
	installationService;
	actions = {
		[ApplicationFeaturesEnum.INSTALLATION]: () => this.installationService.installApplication(),
		[ApplicationFeaturesEnum.CREATION_DIRECTORIES]: () => this.installationService.createDirectories(),
		[ApplicationFeaturesEnum.EXIT]: () => this.exit(),

	}
	
	constructor(installationService: InstallationUIAPI) {
		this.installationService = installationService;
	}

	renderLogo() {
		console.log(logo);
	}

	async showUserPrompt() {
		const result = await prompt([{
			name: 'name',
			message: 'What\'s your name?',
			type: Input,
		}, {
			name: 'age',
			message: 'How old are you?',
			type: Number,
		}, {
			name: 'like',
			message: 'Do you like animals?',
			type: Confirm,
		}, {
			name: 'animals',
			message: 'Select some animals',
			type: Checkbox,
			options: ['dog', 'cat', 'snake'],
		}]);
		this.installationService.installApplication(result);
		return true;
	}

	async initClient() {
		this.renderLogo();
		const choice = await Select.prompt({
			message: "Menu",
			options: [
			  { name: "bootstrap new computer", value: ApplicationFeaturesEnum.INSTALLATION },
			  { name: "creation of working directories", value: ApplicationFeaturesEnum.CREATION_DIRECTORIES },
			  Select.separator("--------"),
			  { name: "exit", value: ApplicationFeaturesEnum.EXIT },
			],
		  }) as ApplicationFeatures;
		 this.actions[choice]();
	}

	exit() {
		return 1;
	}
}
