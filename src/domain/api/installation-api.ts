import { UserInstallationPreference } from '../models/user-installation-preference.ts';

export interface InstallationUIAPI {
	installApplication: (
		preference: UserInstallationPreference,
	) => boolean;

	createDirectories: () => void;
}
