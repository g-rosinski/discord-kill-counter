import dotenv from 'dotenv'

dotenv.config()

const sanitizedConfig = (): NodeJS.ProcessEnv => {
    for (const [key, value] of Object.entries(process.env)) {
        if (value === undefined) {
          throw new Error(`Variable de ambiente <${key}> no definida en el archivo .env`);
        }
    }
    return process.env;
}

export const CONFIG: NodeJS.ProcessEnv = sanitizedConfig()