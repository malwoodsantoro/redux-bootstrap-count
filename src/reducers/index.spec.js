import counter from './index'

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toBe(0)
    })

    it('should handle INCREMENT action', () => {
      expect(counter(1, { type: 'INCREMENT' })).toBe(2)
    })

    it('should handle DECREMENT action', () => {
      expect(counter(1, { type: 'DECREMENT' })).toBe(0)
    })

    it('should handle ZERO action', () => {
      expect(counter(1, { type: 'ZERO' })).toBe(0)
    })

    it('should handle TEN action', () => {
      expect(counter(1, { type: 'TEN' })).toBe(11)
    })

    it('should ignore unknown actions', () => {
      expect(counter(1, { type: 'unknown' })).toBe(1)
    })
  })
})
