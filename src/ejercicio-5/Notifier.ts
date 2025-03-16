import { TipoNotificacion } from "./IntfTipoNotificacion.js";

export class Notifier {
    constructor(private notificationService: TipoNotificacion) {
    }
  
    /**
     * Envia la notificación
     * @param message - mensaje a enviar en string
     */
    sendNotification(message: string): void {
      this.notificationService.notify(message);
    }
  }