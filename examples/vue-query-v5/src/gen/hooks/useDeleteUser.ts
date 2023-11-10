import client from '@kubb/swagger-client/client'
import { useMutation } from '@tanstack/vue-query'
import { unref } from 'vue'
import type { KubbQueryFactory } from './types'
import type { DeleteUserMutationResponse, DeleteUserPathParams, DeleteUser400, DeleteUser404 } from '../models/DeleteUser'
import type { UseMutationOptions, UseMutationReturnType } from '@tanstack/vue-query'
import type { MaybeRef } from 'vue'

type DeleteUser = KubbQueryFactory<
  DeleteUserMutationResponse,
  DeleteUser400 | DeleteUser404,
  never,
  DeleteUserPathParams,
  never,
  never,
  DeleteUserMutationResponse,
  {
    dataReturnType: 'data'
    type: 'mutation'
  }
> /**
 * @description This can only be done by the logged in user.
 * @summary Delete user
 * @link /user/:username
 */

export function useDeleteUser<TData = DeleteUser['response'], TError = DeleteUser['error']>(
  refUsername: MaybeRef<DeleteUserPathParams['username']>,
  options: {
    mutation?: UseMutationOptions<TData, TError, void, unknown>
    client?: DeleteUser['client']['paramaters']
  } = {},
): UseMutationReturnType<TData, TError, void, unknown> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<TData, TError, void, unknown>({
    mutationFn: () => {
      const username = unref(refUsername)
      return client<DeleteUser['data'], TError, void>({
        method: 'delete',
        url: `/user/${username}`,
        ...clientOptions,
      }).then((res) => res as TData)
    },
    ...mutationOptions,
  })
}
