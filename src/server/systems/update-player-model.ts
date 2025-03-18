import { insert, query } from "@rbxts/flamecs";
import { useEvent } from "@rbxts/planck-flamecs-hooks";
import { SystemTable } from "@rbxts/planck/out/types";
import { Model, Poison, User } from "shared/components";
import { Update } from "shared/phases";

function updatePlayerModel() {
	for (const [entity, player] of query<[User]>()) {
		for (const [character] of useEvent(player.player.CharacterAdded)) {
			insert<[Model, Poison]>(entity, [
				{
					model: character,
					primaryPart: character.PrimaryPart,
					humanoid: character.FindFirstChildOfClass("Humanoid"),
				},
			]);
		}
	}
}

export = {
	system: updatePlayerModel,
	phase: Update.phase,
} as SystemTable<[]>;
