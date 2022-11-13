import { InstallationUIAPI } from '../../domain/api/installation-api.ts';
import { UIClientAPI } from '../../domain/api/ui-api.ts';
import {
	ApplicationFeatures,
	ApplicationFeaturesEnum,
} from '../../domain/types/feature.type.ts';
import { Select } from '../deps.ts';
import { CliffyCIInstallation } from './ci-installation.ts';
import { logo } from './logo.ts';
/* ts */
export class CliffyCIHome implements UIClientAPI {
	installationService;
	actions = {
		[ApplicationFeaturesEnum.INSTALLATION]: () => {
			const installationMenu = new CliffyCIInstallation(
				this.installationService,
			);
			return installationMenu.showMenu();
		},
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
		const view = this.actions[userChoice]();
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

	private async syncAccount() {
		await console.log('sync account');
	}

	private exit() {
		return 1;
	}
}
