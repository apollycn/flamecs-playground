import { System } from "@rbxts/planck/out/types";
import { SCHEDULAR } from "./schedular";
import { ContextActionService, RunService } from "@rbxts/services";
import { applets, obtain_client, register } from "@rbxts/jabby";
import { registry } from "@rbxts/flamecs";

export function startup(systems: System<[]>[]) {
	if (systems.size() > 0) SCHEDULAR.addSystems(systems);

	if (RunService.IsClient()) {
		const client = obtain_client();

		const createWidget = (actionName: string, state: Enum.UserInputState) => {
			if (state !== Enum.UserInputState.Begin) return;

			client.spawn_app(client.apps.home);
		};

		ContextActionService.BindAction("Open Jabby", createWidget, false, Enum.KeyCode.F4);
	}

	register({
		applet: applets.world,
		name: "Flamecs",
		configuration: {
			world: registry,
		},
	});
}
