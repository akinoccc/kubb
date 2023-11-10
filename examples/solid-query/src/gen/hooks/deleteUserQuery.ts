import client from '@kubb/swagger-client/client'
import { createMutation } from '@tanstack/solid-query'
import type { KubbQueryFactory } from './types'
import type { DeleteUserMutationResponse, DeleteUserPathParams, DeleteUser400, DeleteUser404 } from '../models/DeleteUser'
import type { CreateMutationOptions, CreateMutationResult } from '@tanstack/solid-query'

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

export function deleteUserQuery<TData = DeleteUser['response'], TError = DeleteUser['error']>(
  username: DeleteUserPathParams['username'],
  options: {
    mutation?: CreateMutationOptions<TData, TError, void>
    client?: DeleteUser['client']['paramaters']
  } = {},
): CreateMutationResult<TData, TError, void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return createMutation<TData, TError, void>({
    mutationFn: () => {
      return client<DeleteUser['data'], TError, void>({
        method: 'delete',
        url: `/user/${username}`,
        ...clientOptions,
      }).then((res) => res as TData)
    },
    ...mutationOptions,
  })
}
