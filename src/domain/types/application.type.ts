export enum SnapApplicationEnum {
	brave = 'brave',
	chrome = 'chrome',
	docker = 'docker',
	figma = 'figma',
	firefox = 'firefox',
	gitkraken = 'gitkraken',
	krita = 'krita',
	obs = 'obs',
	postman = 'postman',
	slack = 'slack',
	spotify = 'spotify',
	vlc = 'vlc',
	vscode = 'vscode',
}
export type SnapApplications = keyof typeof SnapApplicationEnum;
