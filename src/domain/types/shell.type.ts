export enum ShellApplicationEnum {
	virtualbox = 'virtualbox',
	curl = 'curl',
	emma = 'emma',
	git = 'git',
	node = 'node',
	ohmyzsh = 'ohmyzsh',
	snap = 'snap',
	yarn = 'yarn',
	zsh = 'zsh',
}

export type ShellApplications = keyof typeof ShellApplicationEnum;
