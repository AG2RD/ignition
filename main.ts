import { InstallationService } from "./src/domain/business-logic/installation.service.ts";
import { CliffyCIHome } from "./src/infrastructure/cliffy-ci/ci-home.ts";

    class Application {
        ui;
        installationService;

        constructor() {
            this.installationService = new InstallationService();
            this.ui = new CliffyCIHome(this.installationService)
            
        }
        main (...args : any) {
            console.log('Ignition project is started', args);
            // boot UI
            this.ui.showUserPrompt()
            // recupérer le domain
            return true;
        }
    }
    new Application().main(Deno.args);