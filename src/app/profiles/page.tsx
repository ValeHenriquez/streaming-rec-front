"use client";
import useProfiles from "@/hooks/useProfiles";
import useUser from "@/store/useUser";
import { NextPageContext } from "next";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const images = [
	"/images/default-blue.png",
	"/images/default-red.png",
	"/images/default-slate.png",
	"/images/default-green.png",
];

interface UserCardProps {
	name: string;
}

const UserCard: React.FC<UserCardProps> = ({ name }) => {
	const imgSrc = images[Math.floor(Math.random() * 4)];

	return (
		<div className="group flex-row w-44 mx-auto">
			<div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
				<img draggable={false} className="w-max h-max object-contain" src={imgSrc} alt="" />
			</div>
			<div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
				{name}
			</div>
		</div>
	);
};

const Profiles = () => {
	const { user } = useUser();
	console.log("THIS IS THE USER IN PROFILE", user);
	const { data: profiles } = useProfiles(user.id);
	console.log(profiles);

	const { setProfile } = useUser();
	const router = useRouter();

	const selectProfile = useCallback(
		(profile: any) => {
			setProfile(profile);
			router.push("/");
		},
		[router]
	);

	return (
		<div className="flex items-center h-full justify-center">
			<div className="flex flex-col">
				<h1 className="text-3xl md:text-6xl text-white text-center">
					Who's looking for recommendations?
				</h1>
				<div className="flex items-center justify-center mt-10">
					<div className="flex gap-2">
						{profiles?.map((profile: any) => (
							<div key={profile.id} onClick={() => selectProfile(profile)}>
								<UserCard name={profile.name} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profiles;
