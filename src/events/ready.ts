import log from '../utils/log.js'
import { ClientWithCommands } from '../types/types.js';

const ready = (client: ClientWithCommands) => () => {
    log.success(`LISTO :: Bot: ${client?.user?.tag} activo!`);
}

export default ready