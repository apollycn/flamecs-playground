import { ReplicatedStorage } from "@rbxts/services";
import { getSystems } from "shared/get-systems";
import { startup } from "shared/startup";

const clientSystems = getSystems(script.Parent?.FindFirstChild("systems") as Folder);
const sharedSystems = getSystems(ReplicatedStorage.FindFirstChild("TS")?.FindFirstChild("systems") as Folder);

startup([...clientSystems, ...sharedSystems]);
