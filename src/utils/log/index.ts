import { CONFIG } from "@constants/config"
import { LOG_LVL } from "./log.enum"
import { LogLevelKeyType } from "./log.types"
import logTheme from "./log.theme"

const log = (logLvl: LOG_LVL) =>  (msg: string, params?: object) => {
    if(logLvl >= LOG_LVL[CONFIG.LOG_LEVEL as LogLevelKeyType]){
        const timestamp = new Date(Date.now())
        console.log(logTheme[logLvl],`${timestamp.toLocaleString()}: ${msg}`, params || "")
    }
}

export default {
    debug: log(LOG_LVL.DEBUG),
    info: log(LOG_LVL.INFO),
    success: log(LOG_LVL.SUCCESS),
    warning: log(LOG_LVL.WARN),
    error: log(LOG_LVL.ERROR),
    critical: log(LOG_LVL.CRITICAL),
}