import { InstallationUIAPI } from '../api/installation-api.ts';
import { UserInstallationPreference } from '../models/user-installation-preference.ts';
import { InstallationSPI } from '../spi/installation.spi.ts';
export class InstallationService implements InstallationUIAPI {
	installationService;
	/** */
	constructor(installationService: InstallationSPI) {
		this.installationService = installationService;
	}
	installApplication(preference: UserInstallationPreference): boolean {
		console.log('installation init');
		console.log('install shell application');
		this.installationService.installShellApplications(
			preference.shellApplications,
		);
		console.log('install snap application');
		this.installationService.installSnapApplications(
			preference.snapApplications,
		);
		return true;
	}

	createDirectories(): void {
		console.log('create directories');
	}
	// récupérer en paramètre les choix utilisateur aggrégés par l'ui
	// appeler l'adaptateur d'installation passé en injection
}
