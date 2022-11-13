
import { SnapApplications } from '../types/application.type.ts';
import { Libraries } from '../types/library.type.ts';
import { ShellApplications } from '../types/shell.type.ts';
export interface InstallationSPI {
	installSnapApplications: (snapApplications: Array<SnapApplications>) => void;
	installShellApplications: (
		shellApplications: Array<ShellApplications>,
	) => void;
	installLibraries: (libraries: Array<Libraries>) => void;
}
