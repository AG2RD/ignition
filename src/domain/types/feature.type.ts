export enum ApplicationFeaturesEnum {
	INSTALLATION = 'INSTALLATION',
	CREATION_DIRECTORIES = 'CREATION_DIRECTORIES',
	SYNC_ACCOUNTS = 'SYNC_ACCOUNTS',
	EXIT = 'EXIT',
}

export type ApplicationFeatures = keyof typeof ApplicationFeaturesEnum;
