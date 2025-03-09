import {IntfFile} from "./FileStorage"

export class DataManager {
    constructor(private file: IntfFile) {}
    
    /**
     * Lee un fichero
     * @returns - contenido en string
     */
    read(): string {
      return this.file.read();
    }
    
    /**
     * Modifica el contenido de un fichero
     * @param data - contenido con el que se modificará. 
     */
    write(data: string): void {
      this.file.write(data);
    }
  }