import { InstallationService } from "./src/domain/business-logic/installation.service.ts";
import { CliffyCIHome } from "./src/infrastructure/cliffy-ci/ci-home.ts";

    class Application {
        ui;
        installationService;

        constructor() {
            this.installationService = new InstallationService();
            this.ui = new CliffyCIHome(this.installationService);
        }
        async main (...args : any) {
            await this.ui.initClient();
            return 1;
        }
    }
    new Application().main(Deno.args);