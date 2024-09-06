import type { DeleteOrderPathParams, DeleteOrder400, DeleteOrder404, DeleteOrderMutationResponse } from '../../models/DeleteOrder.ts'
import { faker } from '@faker-js/faker'

export function createDeleteOrderPathParams(data: NonNullable<Partial<DeleteOrderPathParams>> = {}): NonNullable<DeleteOrderPathParams> {
  faker.seed([220])
  return {
    ...{ orderId: faker.number.int() },
    ...data,
  }
}

/**
 * @description Invalid ID supplied
 */
export function createDeleteOrder400(): NonNullable<DeleteOrder400> {
  faker.seed([220])
  return undefined
}

/**
 * @description Order not found
 */
export function createDeleteOrder404(): NonNullable<DeleteOrder404> {
  faker.seed([220])
  return undefined
}

export function createDeleteOrderMutationResponse(): NonNullable<DeleteOrderMutationResponse> {
  faker.seed([220])
  return undefined
}
