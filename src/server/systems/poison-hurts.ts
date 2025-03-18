import { insert, query, remove, set, Without } from "@rbxts/flamecs";
import { useThrottle } from "@rbxts/planck-flamecs-hooks";
import { SystemTable } from "@rbxts/planck/out/types";
import { Damage, Poison, PoisonEffect } from "shared/components";
import { Update } from "shared/phases";

function poisonHurts() {
	for (const [entity] of query<[Poison, Without<PoisonEffect>]>()) {
		insert<[PoisonEffect]>(entity, [{ interval: 1, damage: 5, left: 10 }]);
	}

	for (const [entity, poison] of query<[PoisonEffect]>()) {
		if (poison.left === 0) {
			remove<Poison>(entity);
			remove<PoisonEffect>(entity);
		}

		if (useThrottle(poison.interval, entity)) {
			set<PoisonEffect>(entity, { ...poison, left: poison.left - 1 });
			insert<[Damage]>(entity, [poison.damage]);
		}
	}
}

export = {
	system: poisonHurts,
	phase: Update.phase,
} as SystemTable<[]>;
