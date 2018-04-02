import Calculator from './index'
import {
    passwordContainsLowercaseLetter,
    passwordContainsUppercaseLetter,
    passwordContainsSpaces,
    passwordContainsNumber,
    passwordContainsSymbol,
    countSpaces
} from './index'

test(`count space`, () => {
    expect(countSpaces(`a     A     `))
        .toBe(2)
})
test(`password Contains Lowercase Letter`, () => {
    expect(passwordContainsLowercaseLetter(`a`))
        .toBe(true)
})
test(`password doesn't Contains Lowercase Letter`, () => {
    expect(passwordContainsLowercaseLetter(`12A3`))
        .toBe(false)
})
test(`password Contains Upper Letter`, () => {
    expect(passwordContainsUppercaseLetter(`A`))
        .toBe(true)
})
test(`password doesn't Contains Upper letter`, () => {
    expect(passwordContainsUppercaseLetter(`12a3`))
        .toBe(false)
})
test(`password Contains Space`, () => {
    expect(passwordContainsSpaces(`A a`))
        .toBe(true)
})
test(`password doesn't Contains Space`, () => {
    expect(passwordContainsSpaces(`12aA3`))
        .toBe(false)
})

test(`password Contains Number`, () => {
    expect(passwordContainsNumber(`A1 a`))
        .toBe(true)
})
test(`password doesn't Contains Number`, () => {
    expect(passwordContainsNumber(`a A`))
        .toBe(false)
})

test(`password Contains Symbol`, () => {
    expect(passwordContainsSymbol(`A1, a`))
        .toBe(true)
})
test(`password doesn't Contains Symbol`, () => {
    expect(passwordContainsSymbol(`a A`))
        .toBe(false)
})
test(`calculator 1`, () => {
    expect(new Calculator().getScore(`a`)).toBe(3)
})
test(`calculator 2`, () => {
    expect(new Calculator().getScore(`ab`)).toBe(4)
})
test(`calculator 3`, () => {
    expect(new Calculator().getScore(`A`)).toBe(3)
})
test(`calculator 4`, () => {
    expect(new Calculator().getScore(`a b`)).toBe(6)
})
test(`calculator 5`, () => {
    expect(new Calculator().getScore(`a b `)).toBe(8)
})
test(`calculator 6`, () => {
    expect(new Calculator().getScore(`!`)).toBe(6)
})
test(`calculator 7`, () => {
    expect(new Calculator().getScore(`This 1 is a really? strong password`)).toBe(54)
})
test(`get Strength Class`, () => {
    expect(new Calculator().calculate(`This 1 is a really? strong password`).className).toEqual({
        name: `very-strong`,
        text: `very strong`
    })
})