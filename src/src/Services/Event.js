// services
import { toast } from "react-toastify";

// Services
import { IsEqual } from "./Helper";

// CSS
import "react-toastify/dist/ReactToastify.css";

/**
 * For Fire event for toast message and loader
 * @param {String} eventType [loader, toast]
 * @param {string} toastType [success,error,warn]
 * @param {string} data [message for toast]
 * @returns Events
 */
const Event = (eventType, toastType, data) => {
  if (IsEqual(eventType, "toast")) toast[toastType](data);
};

export { Event };
