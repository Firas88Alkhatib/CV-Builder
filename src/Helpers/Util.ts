export const debounce = (callback: Function, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback.apply(this, args), delay)
  }
}

export const xpathSelector = (xpathExpression: string, targetNode: Node) => {
  let results = []
  const resultType = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
  const xpathResult = document.evaluate(xpathExpression, targetNode, null, resultType, null)
  for (let i = 0; i < xpathResult.snapshotLength; i++) {
    results.push(xpathResult.snapshotItem(i))
  }
  return results
}

export const rgbToHex = (rgb: string) => {
  // /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/
  const result = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/.exec(rgb)
  if (result) {
    const hexColor = result.slice(1).map(item => {
      const hex = Number(item).toString(16).toUpperCase()
      return hex.length === 1 ? '0' + hex : hex
    })
    return '#' + hexColor.join('')
  }
  return null
}

/** Form input validator */
export class Validator {
  private targetValue: string
  private targetName: string
  private errors: string[] = []
  private broken: boolean = false
  /**
   * Form input validator
   * @param {string} fieldValue - The input value to be validated.
   * @param {string} fieldName - The input name to show in error messages.
   */
  constructor(fieldValue: string, fieldName: string = '') {
    this.targetName = fieldName
    this.targetValue = fieldValue
  }
  /**
   * Check if the field is a valid email address.
   * @param {boolean} breaks - Breaks the chain if the check is invalid
   * @return {this} This validator instance.
   */
  isEmail(breaks: boolean = false): this {
    if (!this.broken) {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const isValid = emailRegex.test(this.targetValue)
      if (!isValid) {
        this.errors.push('Invalid Email Address.')
        this.broken = breaks
      }
    }
    return this
  }
  /**
   * Check if the field is longer than a specified length.
   * @param {number} length - The length of string to check
   * @param {boolean} breaks - Breaks the chain if the check is invalid
   * @return {this} This validator instance.
   */
  isLengthAtLeast(length: number, breaks: boolean = false): this {
    if (!this.broken) {
      const isValid = this.targetValue.length >= length
      if (!isValid) {
        this.errors.push(`${this.targetName} must be at least ${length} characters.`)
        this.broken = breaks
      }
    }
    return this
  }
  /**
   * Check if the field has uppercase characters.
   * @param {boolean} breaks - Breaks the chain if the check is invalid
   * @return {this} This validator instance.
   */
  hasUppercaseChars(breaks: boolean = false): this {
    if (!this.broken) {
      const isValid = /[A-Z]/.test(this.targetValue)
      if (!isValid) {
        this.errors.push(`${this.targetName} must have at least one uppercase character.`)
        this.broken = breaks
      }
    }
    return this
  }
  /**
   * Check if the field has lowercase characters.
   * @param {boolean} breaks - Breaks the chain if the check is invalid
   * @return {this} This validator instance.
   */
  hasLowercaseChars(breaks: boolean = false): this {
    if (!this.broken) {
      const isValid = /[a-z]/.test(this.targetValue)
      if (!isValid) {
        this.errors.push(`${this.targetName} must have at least one lowercase character.`)
        this.broken = breaks
      }
    }
    return this
  }
  /**
   * Check if the field has digits.
   * @param {boolean} breaks - Breaks the chain if the check is invalid
   * @return {this} This validator instance.
   */
  hasDigits(breaks: boolean = false): this {
    if (!this.broken) {
      const isValid = /[0-9]/.test(this.targetValue)
      if (!isValid) {
        this.errors.push(`${this.targetName} must have at least one number.`)
        this.broken = breaks
      }
    }
    return this
  }
  /**
   * Check if the field has special characters.
   * @param {boolean} breaks - Breaks the chain if the check is invalid
   * @return {this} This validator instance.
   */
  hasSpecialChars(breaks: boolean = false): this {
    if (!this.broken) {
      const isValid = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(this.targetValue)
      if (!isValid) {
        this.errors.push(`${this.targetName} must have at least one special character.`)
        this.broken = breaks
      }
    }
    return this
  }
  /**
   * Check if the field is null, empty string, or whitespaces.
   * @param {boolean} breaks - Breaks the chain if the check is invalid
   * @return {this} This validator instance.
   */
  isNotEmpty(breaks: boolean = false): this {
    if (!this.broken) {
      const isValid = this.targetValue !== null && this.targetValue.trim() !== ''
      if (!isValid) {
        this.errors.push(`${this.targetName} cannot be empty.`)
        this.broken = breaks
      }
    }
    return this
  }
  /**
   * Check if the field has whitespaces at the beginning or at the end .
   * @param {boolean} breaks - Breaks the chain if the check is invalid
   * @return {this} This validator instance.
   */
  noSpacesStartEnd(breaks: boolean = false): this {
    if (!this.broken) {
      const isValid = this.targetValue === this.targetValue.trim()
      if (!isValid) {
        this.errors.push(`${this.targetName} cannot start or end with whitespace.`)
        this.broken = breaks
      }
    }
    return this
  }
  /**
   * Check if the value of the field matches a specific value.
   * @param {string} matchValue - The value to check the field against
   * @param {string} matchName - The matching value name to list it in the error message
   * @param {boolean} breaks - Breaks the chain if the check is invalid
   * @return {this} This validator instance.
   */
  isMatch(matchValue: string, matchName: string = '', breaks: boolean = false): this {
    if (!this.broken) {
      const isValid = this.targetValue === matchValue
      if (!isValid) {
        this.errors.push(`${this.targetName} doesn't match ${matchName}.`)
        this.broken = breaks
      }
    }
    return this
  }
  /**
   * End the validation chain and return the possible errors.
   * @return {{isValid: boolean,errors: string[]}} The possible errors along with if the targeted field is valid or not.
   */
  end(): { isValid: boolean; errors: string[] } {
    return { isValid: this.errors.length < 1, errors: this.errors }
  }
}
