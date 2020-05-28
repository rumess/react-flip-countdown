# @rumess/react-flip-countdown

> The React Flip Countdown Component.

[![NPM](https://img.shields.io/npm/v/@rumess/react-flip-countdown.svg)](https://www.npmjs.com/package/@rumess/react-flip-countdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[DEMO](https://rumess.github.io/react-flip-countdown/)

## Install

```bash
npm install --save @rumess/react-flip-countdown
```

## Usage

### Basic

```jsx
import React, { Component } from 'react';

import FlipCountdown from 'react-flip-countdown';

class ExampleBasic extends Component {
    render() {
        return (
            <FlipCountdown
                endAt={'2022-12-12 01:26:58'} // Date/Time
            />
        );
    }
}
```

### Size

```jsx
import React, { Component } from 'react';

import FlipCountdown from 'react-flip-countdown';

class ExampleSize extends Component {
    render() {
        return (
            <FlipCountdown
                size='large' // Options (Default: medium): large, medium, small, extra-small.
                endAt={'2022-12-12 01:26:58'} // Date/Time
            />
        );
    }
}
```

### Theme

```jsx
import React, { Component } from 'react';

import FlipCountdown from 'react-flip-countdown';

class ExampleTheme extends Component {
    render() {
        return (
            <FlipCountdown
                theme='dark' // Options (Default: dark): dark, light.
                endAt={'2022-12-12 01:26:58'} // Date/Time
            />
        );
    }
}
```

### Title Position

```jsx
import React, { Component } from 'react';

import FlipCountdown from 'react-flip-countdown';

class ExampleTitlePosition extends Component {
    render() {
        return (
            <FlipCountdown
                titlePosition='top' // Options (Default: top): top, bottom.
                endAt={'2022-12-12 01:26:58'} // Date/Time
            />
        );
    }
}
```

### Hide certain sections

```jsx
import React, { Component } from 'react';

import FlipCountdown from 'react-flip-countdown';

class ExampleHideSection extends Component {
    render() {
        return (
            <FlipCountdown
                hideYear
                hideMonth
                hideDay
                // hideHour
                // hideMinute
                // hideSecond
                endAt={'2022-12-12 01:26:58'} // Date/Time
            />
        );
    }
}
```

## License

MIT © [rumess](https://github.com/rumess)
