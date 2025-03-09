import { TipoNotificacion } from "./IntfTipoNotificacion";

export class ShortMessageService implements TipoNotificacion{
    /**
     * Notifica por consola que se está enviando una notificacion via SMS
     * @param message - mensaje en string
     */
    notify(message: string): void {
      console.log(`Sending notification by SMS: ${message}`);
    }
  }