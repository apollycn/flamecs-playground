import { registry } from "@rbxts/flamecs";
import { Scheduler } from "@rbxts/planck";
import { PlanckFlamecsHooksPlugin } from "@rbxts/planck-flamecs-hooks";
import PlankJabbyPlugin from "@rbxts/planck-jabby";

const jabby = new PlankJabbyPlugin();
const hooks = new PlanckFlamecsHooksPlugin();

export const SCHEDULAR = new Scheduler(registry).addPlugin(jabby).addPlugin(hooks);
