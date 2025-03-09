import { describe, expect, test, vi } from "vitest";
import {TipoNotificacion} from "../src/ejercicio-5/IntfTipoNotificacion"
import {EmailService} from "../src/ejercicio-5/EmailService"
import {ShortMessageService} from "../src/ejercicio-5/ShortMessageService"
import {Notifier} from "../src/ejercicio-5/Notifier"


const emailNotifier = new Notifier(new EmailService());
  
const shortMessageNotifier = new Notifier(new ShortMessageService());


const consoleSpy = vi.spyOn(console, 'log');

describe("Tests Ejercicio-5", () => {
    
    test("EmailService", () => {
        emailNotifier.sendNotification('Hello World!');
      
      expect(consoleSpy).toHaveBeenCalledWith('Sending notification by email: Hello World!');
    });

    test("SMS Service", () => {
        shortMessageNotifier.sendNotification('Hello World!');
      
      expect(consoleSpy).toHaveBeenCalledWith('Sending notification by SMS: Hello World!');
    });

  });
