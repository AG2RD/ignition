install-curl:
	apt-get install curl

install-deno: install-curl
	curl -fsSL https://deno.land/install.sh | bash

configure-bashrc:
	echo export DENO_INSTALL="\"/home/shadowing/.deno\"" >> "/home/shadowing/.bashrc"
	echo export PATH="\"\$$DENO_INSTALL/bin:\$$PATH\"" >> "/home/shadowing/.bashrc"
	. ~/.bashrc
	deno --version

install: install-deno configure-bashrc

install-ignition-deps:
	deno cache --reload ./**/deps.ts

ignition: install-ignition-deps
	deno run --allow-run main.ts

all: install ignition