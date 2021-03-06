/** @flow */

import {boolean} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      boolean(input)
    }).toThrow(errorMessage)
  })
}

describe('boolean()', () => {
  it('should return expected object when called without arguments', () => {
    expect(boolean()).toEqual({type: 'boolean'})
  })

  itShouldThrow(
    'when type is an array',
    ({type: []}: any),
    'type must be string literal "boolean"',
  )

  itShouldThrow(
    'when type is a boolean',
    ({type: true}: any),
    'type must be string literal "boolean"',
  )

  itShouldThrow(
    'when type is null',
    ({type: null}: any),
    'type must be string literal "boolean"',
  )

  itShouldThrow(
    'when type is a number',
    ({type: 1}: any),
    'type must be string literal "boolean"',
  )

  itShouldThrow(
    'when type is an object',
    ({type: {}}: any),
    'type must be string literal "boolean"',
  )

  itShouldThrow(
    'when type is an invalid string',
    ({type: 'string'}: any),
    'type must be string literal "boolean"',
  )

  itShouldThrow(
    'when unknown properties included',
    ({foo: 'bar'}: any),
    'unknown key "foo"',
  )
})
