import { cleanEnv, str } from 'envalid'

export const env = cleanEnv(process.env, {
  DB_USER: str(),
  DB_HOST: str(),
  DB_PASSWORD: str(),
  DB_DATABASE: str()
})
