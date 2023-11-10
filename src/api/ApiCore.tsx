import axios, { AxiosError, AxiosResponse } from "axios"
import { Env } from "../config/env"

axios.defaults.baseURL = Env.API_ROOT
axios.defaults.headers.post['Content-Type'] = 'application/json'

export interface PaginationMeta {
  page: number
  limit: number
  itemCount: number
  pageCount: number
  hasPreviousPage?: boolean
  hasNextPage?: boolean
}

export const DEFAULT_PAGINATION_META: PaginationMeta = {
  itemCount: 0,
  limit: 20,
  pageCount: 0,
  page: 1,
}

export const DEFAULT_PAGINATION_INPUT: PaginationInput = {
  page: 1,
  limit: 20,
}

export type  PaginationInput = {
  page: number
  limit: number
}

export interface PaginationResponse<T> {
  data: T[]
  meta: PaginationMeta
}

type ErrorResponseData = {
  message?: string
  error?: string
  statusCode?: number
}

const formatError = (e: AxiosError<ErrorResponseData>) => {
  if (e.response?.data?.message) {
    throw new AxiosError(e.response.data.message)
  }
  throw e
}

export const handleDownloadFile = (res: AxiosResponse<any, Blob>, filename?: string) => {
  console.log(res.headers)
  if (res.status === 200) {
    const link = document.createElement('a')
    link.target = '_blank'
    if (filename) link.download = filename
    link.href = URL.createObjectURL(
      new Blob([res.data], { type: res.headers['content-type'] }),
    )
    link.click()
  } else {
    throw new Error(res.statusText)
  }
}

export class ApiCore {
  protected static async get<T = any>(uri: string, params: any = {}) {
    return await axios.get<any, AxiosResponse<T>>(uri, { params }).then(res=>res.data).catch(formatError)
  }

  protected static getFile(uri: string, params: any | undefined) {
    return axios.get(uri, { params, responseType: 'blob' }).catch(formatError)
  }

  protected static async paginate<T = any>(uri: string, params: any = {}) {
    return await axios.get<any, AxiosResponse<PaginationResponse<T>>>(uri, { params }).then(res=>res.data).catch(formatError)
  }

  protected static async post<T = any>(uri: string, data: any) {
    return await axios.post<T>(uri, data).then(res=>res.data).catch(formatError)
  }

  protected static async patch<T = any>(uri: string, data: any = {}) {
    return axios.patch<any, AxiosResponse<T>>(uri, data).then(res=>res.data).catch(formatError)
  }

  protected static async put<T = any>(uri: string, data: any = {}) {
    return axios.put<any, AxiosResponse<T>>(uri, data).then(res=>res.data).catch(formatError)
  }

  protected static async delete<T = any>(uri: string, data: any = {}) {
    return axios.delete<any, AxiosResponse<T>>(uri, data).then(res=>res.data).catch(formatError)
  }

  static async postForm<T = any>(uri: string, formData: FormData) {
    return await axios.post<any, AxiosResponse<T>>(uri, formData).then(res=>res.data).catch(formatError)
  }
}
