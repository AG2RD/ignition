import { InstallationUIAPI } from '../../domain/api/installation-api.ts';
import { UIClientAPI } from '../../domain/api/ui-api.ts';
import {
	ApplicationFeatures,
	ApplicationFeaturesEnum,
} from '../../domain/types/feature.type.ts';
import { Checkbox, Confirm, Input, Number, prompt, Select } from '../deps.ts';
import { logo } from './logo.ts';
/* ts */
export class CliffyCIHome implements UIClientAPI {
	installationService;
	actions = {
		[ApplicationFeaturesEnum.INSTALLATION]: () =>
			this.installationService.installApplication(),
		[ApplicationFeaturesEnum.CREATION_DIRECTORIES]: () =>
			this.installationService.createDirectories(),
		[ApplicationFeaturesEnum.SYNC_ACCOUNTS]: () => this.syncAccount(),
		[ApplicationFeaturesEnum.EXIT]: () => this.exit(),
	};

	constructor(installationService: InstallationUIAPI) {
		this.installationService = installationService;
	}

	async initClient() {
		const userChoice = await this.renderMainMenu();
		this.actions[userChoice]();
	}

	private async renderMainMenu(): Promise<ApplicationFeatures> {
		const p = Deno.run({ cmd: ['clear'] });
		await p.status();
		console.log(logo);
		return await Select.prompt({
			message: 'Menu',
			options: [
				{
					name: 'bootstrap new computer',
					value: ApplicationFeaturesEnum.INSTALLATION,
				},
				{
					name: 'creation of working directories',
					value: ApplicationFeaturesEnum.CREATION_DIRECTORIES,
				},
				Select.separator('--------'),
				{ name: 'exit', value: ApplicationFeaturesEnum.EXIT },
			],
		}) as ApplicationFeatures;
	}

	private async showUserPrompt() {
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

	private async syncAccount() {
		await console.log('sync account');
	}

	private exit() {
		return 1;
	}
}
