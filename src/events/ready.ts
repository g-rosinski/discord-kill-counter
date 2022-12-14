import log from '../utils/log.js'
import { ClientWithCommands } from '../types/types.js';
import { connect } from '../utils/database.js';

const ready = (client: ClientWithCommands) => () => {
    connect()
    log.success(`LISTO! Bot activo, logueado como ${client?.user?.tag}`);
}

export default ready