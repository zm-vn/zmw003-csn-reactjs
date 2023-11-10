const NODE_ENV = process.env.NODE_ENV

const isProduction = NODE_ENV === "production"

export const Env = {
  DEFAULT_EMAIL: isProduction ? process.env.REACT_APP_DEFAULT_EMAIL : '',
  DEFAULT_PASSWORD: isProduction ? process.env.REACT_APP_DEFAULT_PASSWORD : '',
  API_ROOT: process.env.REACT_APP_API_ROOT,
}
