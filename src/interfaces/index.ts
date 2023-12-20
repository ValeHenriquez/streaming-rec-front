export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
}

export interface Profile {
	id: string;
	name: string;
	accountId: string;
	history: [];
}
