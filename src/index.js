import { initArray, timezoneOffset } from './utils'

const SECOND_IN_MILLISECONDS = 1000
const MINUTE_IN_MILLISECONDS = SECOND_IN_MILLISECONDS * 60
const HOUR_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 60
const DAY_IN_MILLISECONDS = HOUR_IN_MILLISECONDS * 24
const ISO_STRING_REGEXP = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})+/

const t = () => ({
  timezone: 'UTC',

  timezoneDiff: 0,

  setTimezone(timezone) {
    this.timezoneDiff = timezoneOffset(timezone)
    this.timezone = timezone
  },

  // 0: Year, 1: Month, 2: Day, 3: Hours, 4: Minutes, 5: Seconds, 6: Milliseconds
  decompose(timestamp, timezone = this.timezone) {
    const timestampDiff = timezone !== this.timezone ? timezoneOffset(timezone) : this.timezoneDiff
    return new Date(timestamp + timestampDiff).toISOString().match(ISO_STRING_REGEXP).slice(1)
  },

  addOneMonth(timestamp, negative) {
    const day = this.getDay(timestamp)
    const multiplicator = negative ? -1 : 1

    // Find the closest day
    // 28, 29, 30 and 31 are all months length possibility
    const { value } = [28, 29, 30, 31].reduce((prev, value) => {
      const diff = Math.abs(parseInt(this.getDay(this.addDays(timestamp, value * multiplicator)), 10) - day)
      return (prev.diff === null || diff < prev.diff) ? { value, diff } : prev
    }, { value: null, diff: null })

    return this.addDays(timestamp, value * multiplicator)
  },

  getYear(timestamp, timezone) {
    return this.decompose(timestamp, timezone)[0]
  },

  getMonth(timestamp, timezone) {
    return this.decompose(timestamp, timezone)[1]
  },

  // Split timestamp into days. +3 is beacause 01 January 1970 is a Thursday
  getWeekDay(timestamp) {
    return ((Math.floor(timestamp / DAY_IN_MILLISECONDS) % 7) + 3) % 7
  },

  getDay(timestamp, timezone) {
    return this.decompose(timestamp, timezone)[2]
  },

  getHours(timestamp, timezone) {
    return this.decompose(timestamp, timezone)[3]
  },

  getMinutes(timestamp, timezone) {
    return this.decompose(timestamp, timezone)[4]
  },

  getSeconds(timestamp, timezone) {
    return this.decompose(timestamp, timezone)[5]
  },

  getMilliseconds(timestamp, timezone) {
    return this.decompose(timestamp, timezone)[6]
  },

  addMonths(timestamp, months) {
    return initArray(Math.abs(months)).reduce(prev => this.addOneMonth(prev, months < 0), timestamp)
  },

  addYears(timestamp, years) {
    return initArray(Math.abs(years)).reduce(prev => this.addMonths(prev, years > 0 ? 12 : -12), timestamp)
  },

  addDays(timestamp, days) {
    return timestamp + (DAY_IN_MILLISECONDS * days)
  },

  addHours(timestamp, hours) {
    return timestamp + (HOUR_IN_MILLISECONDS * hours)
  },

  addMinutes(timestamp, minutes) {
    return timestamp + (MINUTE_IN_MILLISECONDS * minutes)
  },

  addSeconds(timestamp, seconds) {
    return timestamp + (SECOND_IN_MILLISECONDS * seconds)
  },

  addMilliseconds(timestamp, milliseconds) {
    return timestamp + milliseconds
  },

  add(timestamp, { years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0 }) {
    return this.addYears(this.addMonths(this.addDays(this.addHours(this.addMinutes(this.addSeconds(this.addMilliseconds(timestamp, milliseconds), seconds), minutes), hours), days), months), years)
  }
})

export default t()
