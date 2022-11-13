import { Libraries } from '../types/library.type.ts';
import { ShellApplications } from '../types/shell.type.ts';
import { SnapApplications } from './../types/application.type.ts';
export interface UserInstallationPreference {
	'libraries': Array<Libraries>;
	'shellApplications': Array<ShellApplications>;
	'snapApplications': Array<SnapApplications>;
}
