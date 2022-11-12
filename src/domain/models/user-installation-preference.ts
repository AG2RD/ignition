import {
	Library,
	ShellApplication,
	SnapApplication,
} from './../types/application.type.ts';
export interface UserInstallationPreference {
	'snapApplications': Array<SnapApplication>;
	'shellApplications': Array<ShellApplication>;
	'libraries': Array<Library>;
}
