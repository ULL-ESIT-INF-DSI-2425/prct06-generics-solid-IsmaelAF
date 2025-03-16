import { Scannable } from "./IntfScanner.js";

export class Scanner implements Scannable {
    /**
     * Señal de que está escaneando
     */
    scan(): void {
        console.log('Scanning...');
    }
}