import { CONFIG } from './config'

const { DB_USERNAME, DB_PASSWORD, DB_HOST } = CONFIG

export const DB_CONNECTION=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`