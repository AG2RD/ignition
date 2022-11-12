import {
	Library,
	ShellApplication,
	SnapApplication,
} from '../types/application.type.ts';

export interface InstallationSPI {
	installSnapApplications: (snapApplications: Array<SnapApplication>) => void;
	installShellApplications: (
		shellApplications: Array<ShellApplication>,
	) => void;
	installLibraries: (libraries: Array<Library>) => void;
}
