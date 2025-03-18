import { query, remove, set } from "@rbxts/flamecs";
import { SystemTable } from "@rbxts/planck/out/types";
import { Damage, HealthCapacity, Model } from "shared/components";
import { Update } from "shared/phases";

function damageHurts() {
	for (const [entity, damage, model, health] of query<[Damage, Model, HealthCapacity]>()) {
		set<HealthCapacity>(entity, { ...health, current: health.current - damage });
		remove<Damage>(entity);
		model.humanoid?.TakeDamage(damage);
	}
}

export = {
	system: damageHurts,
	phase: Update.phase,
} as SystemTable<[]>;
