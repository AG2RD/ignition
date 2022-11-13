export enum ApplicationFeaturesEnum {
	CREATION_DIRECTORIES = 'CREATION_DIRECTORIES',
	EXIT = 'EXIT',
	INSTALLATION = 'INSTALLATION',
	SYNC_ACCOUNTS = 'SYNC_ACCOUNTS',
}

export type ApplicationFeatures = keyof typeof ApplicationFeaturesEnum;
