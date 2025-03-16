import { TipoNotificacion } from "./IntfTipoNotificacion.js";

export class EmailService implements TipoNotificacion{
    /**
     * Notifica por consola que se está enviando una notificacion via email
     * @param message - mensaje a mandar en string
     */
    notify(message: string): void {
      console.log(`Sending notification by email: ${message}`);
    }
  }