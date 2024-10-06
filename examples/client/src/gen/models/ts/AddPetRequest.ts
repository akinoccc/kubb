import type { Category } from './Category.js'
import type { Tag } from './Tag.js'

export const addPetRequestStatusEnum = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const

export type AddPetRequestStatusEnum = (typeof addPetRequestStatusEnum)[keyof typeof addPetRequestStatusEnum]

export type AddPetRequest = {
  /**
   * @type integer | undefined, int64
   */
  id?: number
  /**
   * @type string
   */
  name: string
  /**
   * @type object | undefined
   */
  category?: Category
  /**
   * @type array
   */
  photoUrls: string[]
  /**
   * @type array | undefined
   */
  tags?: Tag[]
  /**
   * @description pet status in the store
   * @type string | undefined
   */
  status?: AddPetRequestStatusEnum
}
