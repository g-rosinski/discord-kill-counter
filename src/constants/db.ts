import dotenv from 'dotenv'

dotenv.config()
const { DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env

export const DB_CONNECTION=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`