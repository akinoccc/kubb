export const orderStatusEnum = {
  placed: 'placed',
  approved: 'approved',
  delivered: 'delivered',
} as const

export type OrderStatusEnumType = (typeof orderStatusEnum)[keyof typeof orderStatusEnum]

export const orderHttpStatusEnum = {
  ok: 200,
  not_found: 400,
} as const

export type OrderHttpStatusEnumType = (typeof orderHttpStatusEnum)[keyof typeof orderHttpStatusEnum]

export type OrderType = {
  /**
   * @type integer | undefined, int64
   */
  id?: number
  /**
   * @type integer | undefined, int64
   */
  petId?: number
  /**
   * @type integer | undefined, int32
   */
  quantity?: number
  /**
   * @type string | undefined, date-time
   */
  shipDate?: string
  /**
   * @description Order Status
   * @type string | undefined
   */
  status?: OrderStatusEnumType
  /**
   * @description HTTP Status
   * @type number | undefined
   */
  http_status?: OrderHttpStatusEnumType
  /**
   * @type boolean | undefined
   */
  complete?: boolean
}
