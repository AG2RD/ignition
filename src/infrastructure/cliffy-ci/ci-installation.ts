import { InstallationUIAPI } from '../../domain/api/installation-api.ts';
import {
	SnapApplicationEnum,
	SnapApplications,
} from '../../domain/types/application.type.ts';
import {
	ShellApplicationEnum,
	ShellApplications,
} from '../../domain/types/shell.type.ts';
import { Checkbox, prompt } from '../deps.ts';
export class CliffyCIInstallation {
	installationService;

	constructor(installationService: InstallationUIAPI) {
		this.installationService = installationService;
	}
	async showMenu() {
		const result = await prompt([{
			name: 'shellApplications',
			message: 'Which applications do you want install?',
			type: Checkbox,
			options: Object.keys(ShellApplicationEnum).map((opt) => ({
				name: opt,
				value: opt,
				checked: true,
			})),
		}, {
			name: 'snapApplications',
			message: 'Which snap applications do you want install?',
			type: Checkbox,
			options: Object.keys(SnapApplicationEnum).map((opt) => ({
				name: opt,
				value: opt,
				checked: true,
			})),
		}]);

		this.installationService.installApplication({
			shellApplications: result.shellApplications as Array<
				ShellApplications
			>,
			snapApplications: result.snapApplications as Array<
				SnapApplications
			>,
		});
	}
}
