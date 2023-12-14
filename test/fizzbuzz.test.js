

import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
    if (typeof number !== 'number') throw new Error('param fail');
    if (Number.isNaN(number)) throw new Error('param fail');

    if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz'
    if (number % 3 === 0) return 'fizz'
    if (number % 5 === 0) return 'buzz'

   
    return number;
}

describe('fizzbuzz', () => {
    // it('Should be a function', () => {
    //     expect(typeof fizzbuzz).toBe('function')
    // })

    it('should throw if not numbers is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow();
    })

    it('should especific error message', () => {
        expect(() => fizzbuzz()).toThrow('param fail')
    })

    it('should especific error message not a number', () => {
        expect(() => fizzbuzz(NaN)).toThrow('param fail')
    })

    it('should return 1 if number provided is 1', () => {
        expect(fizzbuzz(1)).toBe(1);
    })
    it('should return 2 if number provided is 2', () => {
        expect(fizzbuzz(2)).toBe(2);
    })
    it('should return FIZZ if number provided is 3', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    })
    it('should return FIZZ if number provided is  multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('fizz');
        expect(fizzbuzz(9)).toBe('fizz');
        expect(fizzbuzz(12)).toBe('fizz');
    })

    it('should return Buzz if number provided is 5', () => {
        expect(fizzbuzz(5)).toBe('buzz');
    })

    it('should return fizzbuzz if multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
        expect(fizzbuzz(45)).toBe('fizzbuzz');
        expect(fizzbuzz(60)).toBe('fizzbuzz');
        expect(fizzbuzz(300)).toBe('fizzbuzz');
    })
})
