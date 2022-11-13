import { InstallationSPI } from '../../domain/spi/installation.spi.ts';
import {  SnapApplications } from '../../domain/types/application.type.ts';
import { Libraries } from '../../domain/types/library.type.ts';
import { ShellApplications } from '../../domain/types/shell.type.ts';

export class DenoInstallHandler implements InstallationSPI {
	/** */
	constructor() {
	}
	installSnapApplications(snapApplications: SnapApplications[]) {
		console.log('denoInstallHandler install snap applications');
	}
	installShellApplications(shellApplications: ShellApplications[]) {
		console.log('denoInstallHandler install shell applications');
	}
	installLibraries(libraries: Libraries[]) {
		console.log('denoInstallHandler install libraries');
	}
}
