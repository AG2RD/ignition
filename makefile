install-curl:
	sudo apt-get install curl

install-deno: install-curl
	curl -fsSL https://deno.land/install.sh | sh

configure-bashrc:
	echo export DENO_INSTALL="/home/${ME}/.deno" >> "/home/${USER}/.bashrc"
	echo export PATH="${DENO_INSTALL}/bin:$$PATH" >> "/home/${USER}/.bashrc"
	. ~/.bashrc
	deno --version

install: install-deno configure-bashrc
	 
ignition:
	deno run --allow-run main.ts

all: install ignition