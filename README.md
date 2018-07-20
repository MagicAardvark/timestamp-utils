# timestamp-utils

⏱️ An anwsome and tiny util package for timestamp without dependencies

---------------------------------------

## Navigation 🗺️ :

* 🤔 [Why](#why--)
* ✍️ [How to use](#how-to-use--)
* 📖 [API](#api--)
	* [decompose(timestamp)](#decompose(timestamp)-)
	* [getYear(timestamp)](#getYear(timestamp)-)
	* [getMonth(timestamp)](#getMonth(timestamp)-)
	* [getDay(timestamp)](#getDay(timestamp)-)
	* [getHours(timestamp)](#getHours(timestamp)-)
	* [getMinutes(timestamp)](#getMinutes(timestamp)-)
	* [getSeconds(timestamp)](#getSeconds(timestamp)-)
	* [getMilliseconds(timestamp)](#getMilliseconds(timestamp)-)
	* [addYears(timestamp, years)](#addYears(timestamp, years)-)
  * [addMonths(timestamp, months)](#addMonths(timestamp, months)-)
  * [addDays(timestamp, days)](#addDays(timestamp, days)-)
  * [addHours(timestamp, hours)](#addHours(timestamp, hours)-)
  * [addMinutes(timestamp, minutes)](#addMinutes(timestamp, minutes)-)
  * [addSeconds(timestamp, seconds)](#addSeconds(timestamp, seconds)-)
  * [addMilliseconds(timestamp, milliseconds)](#addMilliseconds(timestamp, milliseconds)-)
  * [add(timestamp, values)](#add(timestamp, values)-)
* 💻 [Development](#development--)
* 🖋 [License](#license--)

## Why 🤔 :

Because when you manipulate date with javascript `Date` class it automatically apply the current timezone.
Using timestamp is a good way to avoid timezones's influences.
But using timestamp for huge maninupulations can be very hard (ex: go to next months).

That why i created `timestamp-utils`, it's a powerful util package to easly manipulate timestamp.

## How to use ✍️ :

Install `timestamp-utils` via npm :

```
npm install --save timestamp-utils
```

Or via yarn :

```
yarn add timestamp-utils
```

Use it :

```javascript
import { addDays } from 'timestamp-utils'

const now = new Date().getTime()
const timestamp = addDays(now, 3)
```

## API 📖 :

### decompose(timestamp) :
* Return : Array
* Params :
  * *timestamp* : Int (timestamp)
* Available since : *v1.0.0*

Decompose `timestamp` to the following array pattern :
`[year, month, day, hours, minutes, seconds, milliseconds]`

---------------------------------------

### getYear(timestamp) :
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
* Available since : *v1.0.0*

Return the `timestamp`'s year.

---------------------------------------

### getMonth(timestamp) :
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
* Available since : *v1.0.0*

Return the `timestamp`'s month (ex: "01" for "january").

---------------------------------------

### getDay(timestamp) :
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
* Available since : *v1.0.0*

Return the `timestamp`'s day (ex: "01" for "monday").

---------------------------------------

### geHours(timestamp) :
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
* Available since : *v1.0.0*

Return the `timestamp`'s hours.

---------------------------------------

### getMinutes(timestamp) :
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
* Available since : *v1.0.0*

Return the `timestamp`'s minutes.

---------------------------------------

### getSeconds(timestamp) :
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
* Available since : *v1.0.0*

Return the `timestamp`'s seconds.

---------------------------------------

### getMilliseconds(timestamp) :
* Return : String
* Params :
  * *timestamp* : Int (timestamp)
* Available since : *v1.0.0*

Return the `timestamp`'s milliseconds.

---------------------------------------

### addYears(timestamp, years) :
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *years*: Int (years to add)
* Available since : *v1.0.0*

Add the given `years` to the given `timestamp`.
`years` can be negative to subtract years.

---------------------------------------

### addMonths(timestamp, months) :
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *months*: Int (months to add)
* Available since : *v1.0.0*

Add the given `months` to the given `timestamp`.
`months` can be negative to subtract months.

---------------------------------------

### addDays(timestamp, days) :
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *days*: Int (days to add)
* Available since : *v1.0.0*

Add the given `days` to the given `timestamp`.
`days` can be negative to subtract days.

---------------------------------------

### addHours(timestamp, hours) :
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *hours*: Int (hours to add)
* Available since : *v1.0.0*

Add the given `hours` to the given `timestamp`.
`hours` can be negative to subtract hours.

---------------------------------------

### addMinutes(timestamp, minutes) :
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *minutes*: Int (minutes to add)
* Available since : *v1.0.0*

Add the given `minutes` to the given `timestamp`.
`minutes` can be negative to subtract minutes.

---------------------------------------

### addSeconds(timestamp, seconds) :
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *seconds*: Int (seconds to add)
* Available since : *v1.0.0*

Add the given `seconds` to the given `timestamp`.
`seconds` can be negative to subtract seconds.

---------------------------------------

### addMilliseconds(timestamp, milliseconds) :
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *milliseconds*: Int (milliseconds to add)
* Available since : *v1.0.0*

Add the given `milliseconds` to the given `timestamp`.
`milliseconds` can be negative to subtract milliseconds.

---------------------------------------

### add(timestamp, values) :
* Return : Int (timestamp)
* Params :
  * *timestamp* : Int (timestamp)
  * *values*: Object
* Available since : *v1.0.0*

`add` is a combo of all previous "add" methods.
`values` is an object that follow this pattern :
`{ years, months, days, hours, minutes, seconds, milliseconds }`
All `values` values are `int` and represent the `key` value to add.

Ex : `{ years: 3, days: -1, seconds: 20 }` will add 3 years, subtract 1 days and add 20 seconds to the given timestamp.

---------------------------------------

## Development 💻 :

```
// Clone the project
git clone git@github.com:lelivrescolaire/react-light-calendar.git

// ⬇️ Install node modules
npm install

// 🚀 Start the project
npm run watch

// ✅ Run tests
npm run test

// 🏗️ Build the project
npm run build

// 👀 Keep an eye on the bundle size
npm run size
```

## License 🖋 :

[MIT](https://en.wikipedia.org/wiki/MIT_License)
