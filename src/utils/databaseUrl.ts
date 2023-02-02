
const devEnvironment = process.env.NODE_ENV === 'development'
const testEnvironment = process.env.NODE_ENV === 'test'

const databaseUrl = devEnvironment
  ? process.env.DATABASE_URL_1
  : testEnvironment
  ? process.env.DATABASE_URL_2
  :''  

  process.env.DATABASE_URL = databaseUrl

  export { databaseUrl }