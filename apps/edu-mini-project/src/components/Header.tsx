import type { HeaderProps } from "@types-components/headers";

function Header({ title }: HeaderProps) {
	return (
		<div className="bg-sky-800 text-white text-center py-6">
			<h1 className="text-4xl font-semibold">{title}</h1>
		</div>
	);
}

export default Header;
