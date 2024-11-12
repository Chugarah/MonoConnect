import { useRepeatedIcons } from "@/app/hooks/useRepeatedIcons";
import type { UseRepeatedIconsProps } from "@/types/theme/themeTypes";

function Stars({ icon, count, classNames }: UseRepeatedIconsProps) {
	const starGenerator = useRepeatedIcons({
		icon: icon,
		count: count,
		classNames: classNames,
	});

	return <>{starGenerator}</>;
}

export default Stars;
