import expect from 'expect'

import required from 'src/index'

describe('Required Parameter function', () => {
  it('throws when invoked', () => {
    expect(() => required('hey')).toThrow(/hey is a required parameter/)
  })
})
