import { System } from "@rbxts/planck/out/types";

export function getSystems(folder: Folder) {
	const systems: System<[]>[] = [];

	folder.GetChildren().forEach((module) => {
		if (!module.IsA("ModuleScript")) return;

		// eslint-disable-next-line @typescript-eslint/no-require-imports
		systems.push(require(module) as System<[]>);
	});

	return systems;
}
