import { Profile, User } from "@/interfaces";
import { create } from "zustand";

type UserStore = {
	user: User;
	profile: Profile;
	setUser: (user: User | null) => void;
	setProfile: (profile: Profile) => void;
};

const useUser = create<UserStore>((set) => ({
	user: {
		id: "",
		name: "",
		email: "",
		password: "",
	},
	profile: {
		id: "",
		name: "",
		accountId: "",
		history: [],
	},
	setUser: (user: User | null) => {
		if (user === null) {
			set({ user: { id: "", name: "", email: "", password: "" } });
		} else {
			set({ user });
		}
	},
	setProfile: (profile) => set({ profile }),
}));

export default useUser;
