export enum LibraryEnum {
	curl = 'curl',
	emma = 'emma',
	git = 'git',
	node = 'node',
	ohmyzsh = 'ohmyzsh',
	snap = 'snap',
	yarn = 'yarn',
	zsh = 'zsh',
}
export type Libraries = keyof typeof LibraryEnum;
