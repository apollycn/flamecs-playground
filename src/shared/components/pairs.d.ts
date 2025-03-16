import { Pair } from "@rbxts/flamecs";
import { Decrease, Increase } from "./primitives";
import { Health, Stamina } from "./tags";
import { Capacity } from "./structs";

export type HealthCapacity = Pair<Capacity, Health>;
export type Heal = Pair<Increase, Health>;
export type Damage = Pair<Decrease, Health>;

export type StaminaCapacity = Pair<Capacity, Stamina>;
export type Recover = Pair<Increase, Stamina>;
export type Fatigue = Pair<Decrease, Stamina>;
