/** @flow */

import type {State, IntegerSchema} from '../types'
import {isInteger, isPositiveInteger} from './numeric'
import {validateSchema} from './utils'

export default function validateInteger(
  schema: IntegerSchema,
  path: string,
): State {
  const state = validateSchema(
    'integer',
    schema,
    path,
    ['type'],
    [
      'exclusiveMaximum',
      'exclusiveMinimum',
      'maximum',
      'minimum',
      'multipleOf',
    ],
  )

  const {
    exclusiveMaximum,
    exclusiveMinimum,
    maximum,
    minimum,
    multipleOf,
  } = schema

  if (exclusiveMaximum !== undefined && typeof exclusiveMaximum !== 'boolean') {
    state.errors.push({
      message: 'exclusiveMaximum must be a boolean',
      path: `${path}.exclusiveMaximum`,
    })
  }

  if (exclusiveMinimum !== undefined && typeof exclusiveMinimum !== 'boolean') {
    state.errors.push({
      message: 'exclusiveMinimum must be a boolean',
      path: `${path}.exclusiveMinimum`,
    })
  }

  if (maximum !== undefined) {
    if (!isInteger(maximum)) {
      state.errors.push({
        message: 'maximum must be an integer',
        path: `${path}.maximum`,
      })
    } else if (minimum !== undefined && maximum < minimum) {
      state.errors.push({
        message: 'maximum cannot be less than minimum',
        path: `${path}.maximum`,
      })
    }
  } else if (exclusiveMaximum !== undefined) {
    state.warnings.push({
      message: 'exclusiveMaximum should not be present when maximum is not',
      path: `${path}.exclusiveMaximum`,
    })
  }

  if (minimum !== undefined) {
    if (!Number.isInteger(minimum)) {
      state.errors.push({
        message: 'minimum must be an integer',
        path: `${path}.minimum`,
      })
    }
  } else if (exclusiveMinimum !== undefined) {
    state.warnings.push({
      message: 'exclusiveMinimum should not be present when minimum is not',
      path: `${path}.exclusiveMinimum`,
    })
  }

  if (multipleOf !== undefined && !isPositiveInteger(multipleOf)) {
    state.errors.push({
      message: 'multipleOf must be a positive integer',
      path: `${path}.multipleOf`,
    })
  }

  return state
}
