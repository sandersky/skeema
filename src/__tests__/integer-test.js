/** @flow */

import {integer} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      integer(input)
    }).toThrow(errorMessage)
  })
}

describe('integer()', () => {
  it('should return expected object when called without arguments', () => {
    expect(integer()).toEqual({type: 'integer'})
  })

  it('should return expected object when options are provided', () => {
    expect(
      integer({
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        maximum: 10,
        minimum: 0,
        multipleOf: 2,
      }),
    ).toEqual({
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      maximum: 10,
      minimum: 0,
      multipleOf: 2,
      type: 'integer',
    })
  })

  itShouldThrow(
    'when type is an array',
    ({type: []}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is a boolean',
    ({type: true}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is null',
    ({type: null}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is a number',
    ({type: 1}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is an object',
    ({type: {}}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is an invalid string',
    ({type: 'boolean'}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when unknown properties included',
    ({foo: 'bar'}: any),
    'unknown key "foo"',
  )

  itShouldThrow(
    'when exclusiveMaximum is an array',
    ({exclusiveMaximum: [], maximum: 2}: any),
    'exclusiveMaximum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMaximum is null',
    ({exclusiveMaximum: null, maximum: 2}: any),
    'exclusiveMaximum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMaximum is a number',
    ({exclusiveMaximum: 1, maximum: 2}: any),
    'exclusiveMaximum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMaximum is an object',
    ({exclusiveMaximum: {}, maximum: 2}: any),
    'exclusiveMaximum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMaximum is a string',
    ({exclusiveMaximum: 'foo', maximum: 2}: any),
    'exclusiveMaximum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMaximum is present and maximum is not',
    {exclusiveMaximum: true},
    'exclusiveMaximum should not be present when maximum is not',
  )

  itShouldThrow(
    'when exclusiveMinimum is an array',
    ({exclusiveMinimum: [], minimum: 2}: any),
    'exclusiveMinimum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMinimum is null',
    ({exclusiveMinimum: null, minimum: 2}: any),
    'exclusiveMinimum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMinimum is a number',
    ({exclusiveMinimum: 1, minimum: 2}: any),
    'exclusiveMinimum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMinimum is an object',
    ({exclusiveMinimum: {}, minimum: 2}: any),
    'exclusiveMinimum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMinimum is a string',
    ({exclusiveMinimum: 'foo', minimum: 2}: any),
    'exclusiveMinimum must be a boolean',
  )

  itShouldThrow(
    'when exclusiveMinimum is present and minimum is not',
    {exclusiveMinimum: true},
    'exclusiveMinimum should not be present when minimum is not',
  )

  itShouldThrow(
    'when maximum is an array',
    ({maximum: []}: any),
    'maximum must be an integer',
  )

  itShouldThrow(
    'when maximum is a boolean',
    ({maximum: true}: any),
    'maximum must be an integer',
  )

  itShouldThrow(
    'when maximum is null',
    ({maximum: null}: any),
    'maximum must be an integer',
  )

  itShouldThrow(
    'when maximum is an object',
    ({maximum: {}}: any),
    'maximum must be an integer',
  )

  itShouldThrow(
    'when maximum is a string',
    ({maximum: 'foo'}: any),
    'maximum must be an integer',
  )

  itShouldThrow(
    'when maximum is less than minimum',
    {maximum: 1, minimum: 2},
    'maximum cannot be less than minimum',
  )

  itShouldThrow(
    'when maximum is a non-integer number',
    {maximum: 1.2},
    'maximum must be an integer',
  )

  itShouldThrow(
    'when minimum is an array',
    ({minimum: []}: any),
    'minimum must be an integer',
  )

  itShouldThrow(
    'when minimum is a boolean',
    ({minimum: true}: any),
    'minimum must be an integer',
  )

  itShouldThrow(
    'when minimum is null',
    ({minimum: null}: any),
    'minimum must be an integer',
  )

  itShouldThrow(
    'when minimum is an object',
    ({minimum: {}}: any),
    'minimum must be an integer',
  )

  itShouldThrow(
    'when minimum is a string',
    ({minimum: 'foo'}: any),
    'minimum must be an integer',
  )

  itShouldThrow(
    'when minimum is a non-integer number',
    {minimum: 1.2},
    'minimum must be an integer',
  )

  itShouldThrow(
    'when multipleOf is an array',
    ({multipleOf: []}: any),
    'multipleOf must be a positive integer',
  )

  itShouldThrow(
    'when multipleOf is a boolean',
    ({multipleOf: true}: any),
    'multipleOf must be a positive integer',
  )

  itShouldThrow(
    'when multipleOf is null',
    ({multipleOf: null}: any),
    'multipleOf must be a positive integer',
  )

  itShouldThrow(
    'when multipleOf is an object',
    ({multipleOf: {}}: any),
    'multipleOf must be a positive integer',
  )

  itShouldThrow(
    'when multipleOf is a string',
    ({multipleOf: 'foo'}: any),
    'multipleOf must be a positive integer',
  )

  itShouldThrow(
    'when multipleOf is a negative integer',
    {multipleOf: -1},
    'multipleOf must be a positive integer',
  )

  itShouldThrow(
    'when multipleOf is a non-integer number',
    {multipleOf: 1.2},
    'multipleOf must be a positive integer',
  )
})
