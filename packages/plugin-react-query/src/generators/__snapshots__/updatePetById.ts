import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const updatePetWithFormMutationKey = () => [{ url: '/pet/{pet_id}' }] as const

export type UpdatePetWithFormMutationKey = ReturnType<typeof updatePetWithFormMutationKey>

/**
 * @summary Updates a pet in the store with form data
 * {@link /pet/:pet_id}
 */
export function useUpdatePetWithForm(
  options: {
    mutation?: UseMutationOptions<
      UpdatePetWithFormMutationResponse,
      ResponseErrorConfig<UpdatePetWithForm405>,
      { petId: UpdatePetWithFormPathParams['petId']; data?: UpdatePetWithFormMutationRequest; params?: UpdatePetWithFormQueryParams }
    >
    client?: Partial<RequestConfig<UpdatePetWithFormMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? updatePetWithFormMutationKey()

  return useMutation<
    UpdatePetWithFormMutationResponse,
    ResponseErrorConfig<UpdatePetWithForm405>,
    { petId: UpdatePetWithFormPathParams['petId']; data?: UpdatePetWithFormMutationRequest; params?: UpdatePetWithFormQueryParams }
  >({
    mutationFn: async ({ petId, data, params }) => {
      return updatePetWithForm(petId, data, params, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}
