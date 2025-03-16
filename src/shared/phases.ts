import { Phase } from "@rbxts/planck";
import PhaseType from "@rbxts/planck/out/Phase";
import { EventInstance } from "@rbxts/planck/out/types";
import { HapticService, Players } from "@rbxts/services";

interface PhaseTable<T extends EventInstance, K extends keyof T> {
	phase: PhaseType;
	instance: T;
	eventString: K;
	event: T[K];
}

function createPhase<T extends EventInstance, K extends keyof T>(
	phase: string,
	instance: T,
	eventString: K,
): PhaseTable<T, K> {
	return {
		phase: new Phase(phase),
		instance,
		eventString,
		event: instance[eventString],
	};
}

export const OnPlayerJoin = createPhase("OnPlayerJoin", Players, "PlayerAdded");
export const OnPlayerLeave = createPhase("OnPlayerLeave", Players, "PlayerRemoving");
