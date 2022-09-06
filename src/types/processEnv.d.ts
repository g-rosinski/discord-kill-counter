declare namespace NodeJS {
    export interface ProcessEnv {
      APP_ID: string
      GUILD_ID: string
      BOT_TOKEN: string
      PUBLIC_KEY: string
      DB_USERNAME: string
      DB_PASSWORD: string
      DB_HOST: string
      LOG_LEVEL: string
    }
  }