export interface User {
	email: string;
	name: string;
	password: string;
}

export interface Profile {
	_id: string;
	name: string;
	accountId: string;
	history: [];
}
