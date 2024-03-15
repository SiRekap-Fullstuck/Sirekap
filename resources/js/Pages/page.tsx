import { Avatar, AvatarFallback } from "@/shadcn/ui/avatar";
import { Head } from "@inertiajs/react";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function page() {
	return (
		<>
			<Head title="Welcome to Root page" />
			<div>
				<Avatar>
					<AvatarImage src="https://github.com/davian27.png" />
					<AvatarFallback>DAP</AvatarFallback>
				</Avatar>
				<h1>Hello world</h1>
			</div>
		</>
	);
}
