const nodeColors = {    
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
}

enum LOG_LVL  {
    DEBUG = 0,
    INFO = 1,
    SUCCESS = 2,
    WARN = 3,
    ERROR = 4,
    CRITICAL = 5
}

const logColorMap = {
    [LOG_LVL.DEBUG]: nodeColors.cyan,
    [LOG_LVL.INFO]: nodeColors.white,
    [LOG_LVL.SUCCESS]: nodeColors.green,
    [LOG_LVL.WARN]: nodeColors.yellow,
    [LOG_LVL.ERROR]: nodeColors.red,
    [LOG_LVL.CRITICAL]: nodeColors.magenta
}

const log = (logLvl: LOG_LVL, msg: string, params?: object) => {
    const timestamp = new Date(Date.now())
    console.log(logColorMap[logLvl],`${timestamp.toLocaleString()}: ${msg}`, params || "")
}

export default {
    debug: (msg: string, params?: object) => log(LOG_LVL.DEBUG, msg, params),
    info: (msg: string, params?: object) => log(LOG_LVL.INFO, msg, params),
    success: (msg: string, params?: object) => log(LOG_LVL.SUCCESS, msg, params),
    warning: (msg: string, params?: object) => log(LOG_LVL.WARN, msg, params),
    error: (msg: string, params?: object) => log(LOG_LVL.ERROR, msg, params),
    critical: (msg: string, params?: object) => log(LOG_LVL.CRITICAL, msg, params),
}