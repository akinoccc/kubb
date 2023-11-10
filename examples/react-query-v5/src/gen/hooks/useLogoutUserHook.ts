import client from '@kubb/swagger-client/client'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import type { KubbQueryFactory } from './types'
import type { LogoutUserQueryResponse, LogoutUserError } from '../models/LogoutUser'
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseInfiniteQueryOptions, UseInfiniteQueryResult } from '@tanstack/react-query'

type LogoutUser = KubbQueryFactory<LogoutUserQueryResponse, LogoutUserError, never, never, never, never, LogoutUserQueryResponse, {
  dataReturnType: 'data'
  type: 'query'
}>
export const logoutUserQueryKey = () => [{ url: `/user/logout` }] as const
export type LogoutUserQueryKey = ReturnType<typeof logoutUserQueryKey>
export function logoutUserQueryOptions<
  TQueryFnData extends LogoutUser['data'] = LogoutUser['data'],
  TError = LogoutUser['error'],
  TData = LogoutUser['response'],
  TQueryData = LogoutUser['response'],
>(options: LogoutUser['client']['paramaters'] = {}): QueryObserverOptions<LogoutUser['unionResponse'], TError, TData, TQueryData, LogoutUserQueryKey> {
  const queryKey = logoutUserQueryKey()
  return {
    queryKey,
    queryFn: () => {
      return client<TQueryFnData, TError>({
        method: 'get',
        url: `/user/logout`,
        ...options,
      }).then(res => res?.data || res)
    },
  }
} /**
 * @summary Logs out current logged in user session
 * @link /user/logout
 */

export function useLogoutUserHook<
  TQueryFnData extends LogoutUser['data'] = LogoutUser['data'],
  TError = LogoutUser['error'],
  TData = LogoutUser['response'],
  TQueryData = LogoutUser['response'],
  TQueryKey extends QueryKey = LogoutUserQueryKey,
>(options: {
  query?: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>
  client?: LogoutUser['client']['paramaters']
} = {}): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? logoutUserQueryKey()
  const query = useQuery<any, TError, TData, any>({
    ...logoutUserQueryOptions<TQueryFnData, TError, TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

type LogoutUserInfinite = KubbQueryFactory<LogoutUserQueryResponse, LogoutUserError, never, never, never, never, LogoutUserQueryResponse, {
  dataReturnType: 'data'
  type: 'query'
}>
export const logoutUserInfiniteQueryKey = () => [{ url: `/user/logout` }] as const
export type LogoutUserInfiniteQueryKey = ReturnType<typeof logoutUserInfiniteQueryKey>
export function logoutUserInfiniteQueryOptions<
  TQueryFnData extends LogoutUserInfinite['data'] = LogoutUserInfinite['data'],
  TError = LogoutUserInfinite['error'],
  TData = LogoutUserInfinite['response'],
  TQueryData = LogoutUserInfinite['response'],
>(
  options: LogoutUserInfinite['client']['paramaters'] = {},
): UseInfiniteQueryOptions<LogoutUserInfinite['unionResponse'], TError, TData, TQueryData, LogoutUserInfiniteQueryKey> {
  const queryKey = logoutUserInfiniteQueryKey()
  return {
    queryKey,
    queryFn: ({ pageParam }) => {
      return client<TQueryFnData, TError>({
        method: 'get',
        url: `/user/logout`,
        ...options,
      }).then(res => res?.data || res)
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['id'],
  }
} /**
 * @summary Logs out current logged in user session
 * @link /user/logout
 */

export function useLogoutUserHookInfinite<
  TQueryFnData extends LogoutUserInfinite['data'] = LogoutUserInfinite['data'],
  TError = LogoutUserInfinite['error'],
  TData = LogoutUserInfinite['response'],
  TQueryData = LogoutUserInfinite['response'],
  TQueryKey extends QueryKey = LogoutUserInfiniteQueryKey,
>(options: {
  query?: UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>
  client?: LogoutUserInfinite['client']['paramaters']
} = {}): UseInfiniteQueryResult<TData, TError> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? logoutUserInfiniteQueryKey()
  const query = useInfiniteQuery<any, TError, TData, any>({
    ...logoutUserInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
