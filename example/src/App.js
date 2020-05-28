import React from 'react';

import FlipCountdown from 'react-flip-countdown';

const App = () => {
    return (
        <div>
            <h1>Large:</h1>
            <FlipCountdown
                theme='dark'
                size='large'
                endAt={'2021-12-12 01:26:58'}
            >
                Done!
            </FlipCountdown>
            <h1>Medium:</h1>
            <FlipCountdown
                theme='dark'
                size='medium'
                endAt={'2021-12-12 01:26:58'}
            >
                Done!
            </FlipCountdown>
            <h1>Small:</h1>
            <FlipCountdown
                theme='dark'
                size='small'
                endAt={'2021-12-12 01:26:58'}
            >
                Done!
            </FlipCountdown>
            <h1>Extra Small:</h1>
            <FlipCountdown
                theme='dark'
                size='extra-small'
                endAt={'2021-12-12 01:26:58'}
            >
                Done!
            </FlipCountdown>
            <h1>Light Theme:</h1>
            <FlipCountdown
                theme='light'
                titlePosition='bottom'
                endAt={'2021-12-12 01:26:58'}
            >
                Done!
            </FlipCountdown>
            <h1>Title Bottom:</h1>
            <FlipCountdown titlePosition='bottom' endAt={'2021-12-12 01:26:58'}>
                Done!
            </FlipCountdown>
        </div>
    );
};

export default App;
