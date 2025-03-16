import { World } from "@rbxts/jabby/out/jecs";
import { onEvent } from "@rbxts/planck";
import { SystemTable } from "@rbxts/planck/out/types";
import { OnPlayerJoin } from "shared/phases";

const collectEvents = onEvent(OnPlayerJoin.event)[1];

function spawnPlayers(world: World) {
	for (const [_, player] of collectEvents()) {
		// Do something
	}
}

export = {
	system: spawnPlayers,
	phase: OnPlayerJoin.phase,
} as SystemTable<[]>;
