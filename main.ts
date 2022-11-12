import { InstallationService } from "./src/domain/business-logic/installation.service.ts";
import { CliffyCIHome } from "./src/infrastructure/cliffy-ci/ci-home.ts";
import {DenoInstallHandler} from './src/infrastructure/deno-installer/denoInstallHandler.ts'
    class Application {
        ui;
        installationService;
        denoInstallHandler;

        constructor() {
            this.denoInstallHandler = new DenoInstallHandler();
            this.installationService = new InstallationService(this.denoInstallHandler);
            this.ui = new CliffyCIHome(this.installationService);
        }
        async main (...args : any) {
            await this.ui.initClient();
            return 1;
        }
    }
    new Application().main(Deno.args);