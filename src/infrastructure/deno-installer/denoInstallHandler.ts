import { InstallationSPI } from '../../domain/spi/installation.spi.ts';
import { SnapApplication } from "../../domain/types/application.type.ts";
import { Library } from "../../domain/types/library.type.ts";

export class DenoInstallHandler implements InstallationSPI {
	/** */
	constructor() {
	}
	installSnapApplications(snapApplications: SnapApplication[]) {
        console.log('installSnapApplications')
    };
	installShellApplications(shellApplications: ''[]) {
        console.log('installShellApplications')
    };
	installLibraries(libraries: Library[]) {
        console.log('installLibraries')
    };
}
