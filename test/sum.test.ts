import { sum } from './sum'
import { describe, it, expect } from 'vitest'

describe('sum', () => {
    it('Should sum two numbers together', () => {
        expect(sum(3, 3)).toBe(6)
    })
})
