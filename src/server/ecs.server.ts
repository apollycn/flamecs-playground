import { ReplicatedStorage } from "@rbxts/services";
import { getSystems } from "shared/get-systems";
import { startup } from "shared/startup";

const serverSystems = getSystems(script.Parent?.FindFirstChild("systems") as Folder);
const sharedSystems = getSystems(ReplicatedStorage.FindFirstChild("systems") as Folder);

startup([...serverSystems, ...sharedSystems]);
