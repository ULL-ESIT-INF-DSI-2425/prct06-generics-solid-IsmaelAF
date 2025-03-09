import { Bird } from "./Bird";
import { IntfFly } from "./IntfFly";

export class Sparrow extends Bird implements IntfFly {
    /**
     * Indica que vuela.
     */
    fly(): void {
        console.log("Flying...");
    }
}