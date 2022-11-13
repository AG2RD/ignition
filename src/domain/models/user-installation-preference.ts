import { ShellApplications } from '../types/shell.type.ts';
import { SnapApplications } from './../types/application.type.ts';
export interface UserInstallationPreference {
	'shellApplications': Array<ShellApplications>;
	'snapApplications': Array<SnapApplications>;
}
