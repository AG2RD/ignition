import { InstallationUIAPI } from '../api/installation-api.ts';
import { UserInstallationPreference } from '../models/user-installation-preference.ts';
export class InstallationService implements InstallationUIAPI {

	installApplication(preference?: UserInstallationPreference): boolean {
        console.log('installation init');
		return true;
	}

    createDirectories(): void {
        console.log('create directories');
    }
	// récupérer en paramètre les choix utilisateur aggrégés par l'ui
	// appeler l'adaptateur d'installation passé en injection
}
