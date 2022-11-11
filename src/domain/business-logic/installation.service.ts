import { InstallationUIAPI } from '../api/installation-api.ts';
import { UserInstallationPreference } from '../models/user-installation-preference.ts';
export class InstallationService implements InstallationUIAPI {
	/** */
	constructor() {}
	installApplication(preference: UserInstallationPreference | any): boolean {
		console.log(preference);
		return true;
	}
	// récupérer en paramètre les choix utilisateur aggrégés par l'ui
	// appeler l'adaptateur d'installation passé en injection
}
