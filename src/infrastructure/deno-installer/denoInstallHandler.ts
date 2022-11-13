import { InstallationSPI } from '../../domain/spi/installation.spi.ts';
import { SnapApplications } from '../../domain/types/application.type.ts';
import { ShellApplications } from '../../domain/types/shell.type.ts';

export class DenoInstallHandler implements InstallationSPI {
	/** */
	constructor() {
	}
	async installSnapApplications(snapApplications: SnapApplications[]) {
		console.log('denoInstallHandler install snap applications');
		const p = Deno.run({
			cmd: ["snap install", ...snapApplications.map((snapApplication) => `${snapApplication} `)],
		  });
		const status = await p.status();
	}
	async installShellApplications(shellApplications: ShellApplications[]) {
		console.log('denoInstallHandler install shell applications');
		const p = Deno.run({
			cmd: ["apt-get install", ...shellApplications.map((shellApplication) => `${shellApplication}`)],
		  });
		const status = await p.status();
	}
}
