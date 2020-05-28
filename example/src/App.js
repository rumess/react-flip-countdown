import React from 'react';

import FlipCountdown from '@rumess/react-flip-countdown';

const App = () => {
    return (
        <div>
            <h1>Large:</h1>
            <FlipCountdown
                theme='dark'
                size='large'
                endAt={new Date(
                    Date.now() +
                        1000 /*sec*/ *
                        60 /*min*/ *
                        60 /*hour*/ *
                        24 /*day*/ *
                        30 /*month*/ *
                        12 /*year*/ *
                            2
                ).toUTCString()}
            />
            <h1>Medium:</h1>
            <FlipCountdown
                theme='dark'
                size='medium'
                endAt={new Date(
                    Date.now() +
                        1000 /*sec*/ *
                        60 /*min*/ *
                        60 /*hour*/ *
                        24 /*day*/ *
                        30 /*month*/ *
                        12 /*year*/ *
                            2
                ).toUTCString()}
            />
            <h1>Small:</h1>
            <FlipCountdown
                theme='dark'
                size='small'
                endAt={new Date(
                    Date.now() +
                        1000 /*sec*/ *
                        60 /*min*/ *
                        60 /*hour*/ *
                        24 /*day*/ *
                        30 /*month*/ *
                        12 /*year*/ *
                            2
                ).toUTCString()}
            />
            <h1>Extra Small:</h1>
            <FlipCountdown
                theme='dark'
                size='extra-small'
                endAt={new Date(
                    Date.now() +
                        1000 /*sec*/ *
                        60 /*min*/ *
                        60 /*hour*/ *
                        24 /*day*/ *
                        30 /*month*/ *
                        12 /*year*/ *
                            2
                ).toUTCString()}
            />
            <h1>Light Theme:</h1>
            <FlipCountdown
                theme='light'
                titlePosition='bottom'
                endAt={new Date(
                    Date.now() +
                        1000 /*sec*/ *
                        60 /*min*/ *
                        60 /*hour*/ *
                        24 /*day*/ *
                        30 /*month*/ *
                        12 /*year*/ *
                            2
                ).toUTCString()}
            />
            <h1>Title Bottom:</h1>
            <FlipCountdown
                titlePosition='bottom'
                endAt={new Date(
                    Date.now() +
                        1000 /*sec*/ *
                        60 /*min*/ *
                        60 /*hour*/ *
                        24 /*day*/ *
                        30 /*month*/ *
                        12 /*year*/ *
                            2
                ).toUTCString()}
            />
            <h1>Hide Sections</h1>
            <FlipCountdown
                hideYear
                hideMonth
                hideDay
                // hideHour
                // hideMinute
                // hideSecond
                endAt={new Date(
                    Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 13
                ).toUTCString()}
            />
        </div>
    );
};

export default App;
