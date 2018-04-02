export const passwordContainsLowercaseLetter = (value) => (/[a-z]/).test(value)
export const passwordContainsUppercaseLetter = (value) => (/[A-Z]/).test(value)
export const passwordContainsSpaces = (value) => (/ /).test(value)
export const passwordContainsNumber = (value) => (/[0-9]/).test(value)
export const passwordContainsSymbol = (value) => {
    let symbols = `-!§$%&/()=?.:,~;'#+-/*\\|{}[]_<>"`
    for (let item of value) {
        if (symbols.includes(item)) {
            return true
        }
    }
    return false
}
export const countSpaces = (value) => (value.split(/ +/).length - 1)

export default class Calculator {
    constructor(options = {
        points: {
            forEachCharacter: 1,
            forEachSpace: 1,
            containsLowercaseLetter: 2,
            containsUppercaseLetter: 2,
            containsNumber: 4,
            containsSymbol: 5
        },
        strengthClassNames: [{
            name: `very-weak`,
            text: `very weak`
        }, {
            name: `weak`,
            text: `weak`
        }, {
            name: `mediocre`,
            text: `mediocre`
        }, {
            name: `strong`,
            text: `strong`
        }, {
            name: `very-strong`,
            text: `very strong`
        }],
        secureStrength: 25
    }) {
        this.points = options.points
        this.strengthClassNames = options.strengthClassNames
        this.secureStrength = options.secureStrength
    }

    calculate(value) {
        let score = this.getScore(value)
        return {score: score, className: this.getStrengthClass(score)}
    }

    getScore(value) {
        let score = value.length * this.points.forEachCharacter
        if (passwordContainsSpaces(value)) {
            score += countSpaces(value) * this.points.forEachSpace
        }
        if (passwordContainsLowercaseLetter(value)) {
            score += this.points.containsLowercaseLetter
        }
        if (passwordContainsUppercaseLetter(value)) {
            score += this.points.containsUppercaseLetter
        }
        if (passwordContainsNumber(value)) {
            score += this.points.containsNumber
        }
        if (passwordContainsSymbol(value)) {
            score += this.points.containsSymbol
        }
        return score
    }

    getStrengthClass(score = 0) {
        let strengthIndex = Math.round(score * (this.strengthClassNames.length - 1) * 100 / this.secureStrength) / 100
        if (strengthIndex >= this.strengthClassNames.length) {
            strengthIndex = this.strengthClassNames.length - 1
        }

        return this.strengthClassNames[strengthIndex]
    }
}
