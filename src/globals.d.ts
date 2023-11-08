declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'test' | 'development' | 'staging' | 'production'
    readonly REACT_APP_DEFAULT_EMAIL: string
    readonly REACT_APP_DEFAULT_PASSWORD: string
    readonly REACT_APP_API_ROOT: string
  }
}
