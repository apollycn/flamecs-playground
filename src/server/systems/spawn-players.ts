import { spawn } from "@rbxts/flamecs";
import { onEvent } from "@rbxts/planck";
import { SystemTable } from "@rbxts/planck/out/types";
import { Health, HealthCapacity, Poison, Stamina, StaminaCapacity, User } from "shared/components";
import { OnPlayerJoin } from "shared/phases";

const collectEvents = onEvent(OnPlayerJoin.event)[1];

function spawnPlayers() {
	for (const [_, player] of collectEvents()) {
		spawn<[User, HealthCapacity, StaminaCapacity, Health, Stamina]>([
			{ player: player, userId: player.UserId },
			{ current: 100, max: 100 },
			{ current: 100, max: 100 },
		]);
	}
}

export = {
	system: spawnPlayers,
	phase: OnPlayerJoin.phase,
} as SystemTable<[]>;
