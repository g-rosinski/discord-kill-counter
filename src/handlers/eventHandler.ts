import * as events from '../events/index.js'
import { ClientWithCommands } from '../types/types.js';

/**
 * Bindea los eventos dentro de la carpeta events al cliente de Discord
 * @param {*} client 
 */
const eventHandler = (client: ClientWithCommands) => {
    const eventList = Object.entries(events);
    eventList.forEach(([eventName, eventFunction]) => {
        client.on(eventName, eventFunction(client))
    });
}

export default eventHandler