import { describe, it, expect }  from 'vitest';


const canReconfigure = (from, to) => {
    if (typeof from !== 'string') throw new Error('from is not a string')
    if (typeof to !== 'string') throw new Error('second param is required')
    if (to.length !== from.length) return false

    return true
}

describe('canReconfigure', () => {
    it('should be a functiion', () => {
        expect(canReconfigure).toBeTypeOf('function')
    })

    it('shoul not missing first param', () => {
        expect(() => canReconfigure(2)).toThrow()
    })

    it('shoul validate second páram', () => {
        expect(() => canReconfigure('a')).toThrow()
    })

    it('should return a boolean', () => {
        expect(canReconfigure('a','b')).toBeTypeOf('boolean')
    })

    it('should return a false if strings provided have different length', () => {
        expect(canReconfigure('axa','be')).toBe(false)
    })
})