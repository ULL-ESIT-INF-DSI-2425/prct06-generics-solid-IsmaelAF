import * as fs from "fs";
import { DataManager } from "./DataManager";

export interface IntfFile {
    read(): string;
    write(data: string): void;
}

export class FileStorage implements IntfFile {
  constructor(private filePath: string) {}

  /**
   * Lee un fichero
   * @returns - contenido en string
   */
  public read(): string {
    try{
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo.");
      return "";
    }
  }

  /**
   * Modifica el contenido de un fichero
   * @param data - contenido con el que se modificará. 
   */
  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}


/*

// Client code
const fileManager = new FileStorage("example.txt");

let prueba2 = new DataManager(fileManager);

const prueba3 = prueba2.read();
console.log(prueba3);
// Reading content
const currentContent = fileManager.read();
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileManager.write(newData);

// Updating content
const updatedContent = fileManager.read();
console.log("Updated content:", updatedContent);
*/