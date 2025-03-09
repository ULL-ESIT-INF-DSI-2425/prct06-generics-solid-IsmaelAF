import { Scannable } from "./IntfScanner";

export class Scanner implements Scannable {
    /**
     * Señal de que está escaneando
     */
    scan(): void {
        console.log('Scanning...');
    }
}