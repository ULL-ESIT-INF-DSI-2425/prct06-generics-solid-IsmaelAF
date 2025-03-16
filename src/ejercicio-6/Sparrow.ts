import { Bird } from "./Bird.js";
import { IntfFly } from "./IntfFly.js";

export class Sparrow extends Bird implements IntfFly {
    /**
     * Indica que vuela.
     */
    fly(): void {
        console.log("Flying...");
    }
}