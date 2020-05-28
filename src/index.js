import React, { useEffect, useState, useRef } from 'react';
import T from 'prop-types';
import moment from 'moment';
import './styles.scss';

const FlipCountdown = (props) => {
    const {
        theme = 'dark',
        size = 'medium',
        endAt = moment(),
        hideYear,
        hideMonth,
        hideDay,
        hideHour,
        hideMinute,
        hideSecond,
        titlePosition = 'top'
    } = props;

    const [completed, setCompleted] = useState(false);

    const clock = {
        year: {
            title: 'Year',
            value: useState(0),
            prevValue: useState(0),
            ref: useRef(null)
        },
        month: {
            title: 'Month',
            value: useState(0),
            prevValue: useState(0),
            ref: useRef(null)
        },
        day: {
            title: 'Day',
            value: useState(0),
            prevValue: useState(0),
            ref: useRef(null)
        },
        hour: {
            title: 'Hour',
            value: useState(0),
            prevValue: useState(0),
            ref: useRef(null)
        },
        minute: {
            title: 'Minute',
            value: useState(0),
            prevValue: useState(0),
            ref: useRef(null)
        },
        second: {
            title: 'Second',
            value: useState(0),
            prevValue: useState(0),
            ref: useRef(null)
        }
    };

    useEffect(() => {
        const then = moment(endAt);
        let prev = moment.duration(moment().diff(moment()));
        const interval = setInterval(() => {
            const value = moment.duration(then.diff(moment()));

            // Year
            if (!hideYear) {
                clock.year.value[1](value.years());
                clock.year.prevValue[1](prev.years());
                if (
                    parseInt(value.years() / 10) !==
                        parseInt(prev.years() / 10) &&
                    clock.year.ref.current
                ) {
                    const section = clock.year.ref.current.querySelector(
                        '.flip-countdown-card-sec.one'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }

                if (
                    parseInt(value.years() % 10) !==
                        parseInt(prev.years() % 10) &&
                    clock.year.ref.current
                ) {
                    const section = clock.year.ref.current.querySelector(
                        '.flip-countdown-card-sec.two'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }
            }

            // Months
            if (!hideMonth) {
                clock.month.value[1](value.months());
                clock.month.prevValue[1](prev.months());
                if (
                    parseInt(value.months() / 10) !==
                        parseInt(prev.months() / 10) &&
                    clock.month.ref.current
                ) {
                    const section = clock.month.ref.current.querySelector(
                        '.flip-countdown-card-sec.one'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }

                if (
                    parseInt(value.months() % 10) !==
                        parseInt(prev.months() % 10) &&
                    clock.month.ref.current
                ) {
                    const section = clock.month.ref.current.querySelector(
                        '.flip-countdown-card-sec.two'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }
            }

            // Days
            if (!hideDay) {
                clock.day.value[1](value.days());
                clock.day.prevValue[1](prev.days());
                if (
                    parseInt(value.days() / 10) !==
                        parseInt(prev.days() / 10) &&
                    clock.day.ref.current
                ) {
                    const section = clock.day.ref.current.querySelector(
                        '.flip-countdown-card-sec.one'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }

                if (
                    parseInt(value.days() % 10) !==
                        parseInt(prev.days() % 10) &&
                    clock.day.ref.current
                ) {
                    const section = clock.day.ref.current.querySelector(
                        '.flip-countdown-card-sec.two'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }
            }

            // Hours
            if (!hideHour) {
                clock.hour.value[1](value.hours());
                clock.hour.prevValue[1](prev.hours());
                if (
                    parseInt(value.hours() / 10) !==
                        parseInt(prev.hours() / 10) &&
                    clock.hour.ref.current
                ) {
                    const section = clock.hour.ref.current.querySelector(
                        '.flip-countdown-card-sec.one'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }

                if (
                    parseInt(value.hours() % 10) !==
                        parseInt(prev.hours() % 10) &&
                    clock.hour.ref.current
                ) {
                    const section = clock.hour.ref.current.querySelector(
                        '.flip-countdown-card-sec.two'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }
            }

            // Minutes
            if (!hideMinute) {
                clock.minute.value[1](value.minutes());
                clock.minute.prevValue[1](prev.minutes());
                if (
                    parseInt(value.minutes() / 10) !==
                        parseInt(prev.minutes() / 10) &&
                    clock.minute.ref.current
                ) {
                    const section = clock.minute.ref.current.querySelector(
                        '.flip-countdown-card-sec.one'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }

                if (
                    parseInt(value.minutes() % 10) !==
                        parseInt(prev.minutes() % 10) &&
                    clock.minute.ref.current
                ) {
                    const section = clock.minute.ref.current.querySelector(
                        '.flip-countdown-card-sec.two'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }
            }

            // Seconds
            if (!hideSecond) {
                clock.second.value[1](value.seconds());
                clock.second.prevValue[1](prev.seconds());
                if (
                    parseInt(value.seconds() / 10) !==
                        parseInt(prev.seconds() / 10) &&
                    clock.second.ref.current
                ) {
                    const section = clock.second.ref.current.querySelector(
                        '.flip-countdown-card-sec.one'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }

                if (
                    parseInt(value.seconds() % 10) !==
                        parseInt(prev.seconds() % 10) &&
                    clock.second.ref.current
                ) {
                    const section = clock.second.ref.current.querySelector(
                        '.flip-countdown-card-sec.two'
                    );
                    section.classList.remove('flip');
                    void section.offsetWidth;
                    section.classList.add('flip');
                }
            }
            prev = value;
        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, []);

    const getPiece = (data) => {
        const [value] = data.value;
        const [prevValue] = data.prevValue;
        const part1 = parseInt(value / 10);
        const part2 = parseInt(value % 10);
        let prev1 = parseInt(prevValue / 10);
        let prev2 = parseInt(prevValue % 10);

        return (
            <span className='flip-countdown-piece' ref={data.ref}>
                {'top' === titlePosition && (
                    <span className='flip-countdown-title'>{data.title}</span>
                )}
                <span className='flip-countdown-card'>
                    <span className={`flip-countdown-card-sec one`}>
                        <span className='card__top'>{part1}</span>
                        <span className='card__bottom' data-value={prev1} />
                        <span className='card__back' data-value={prev1}>
                            <span className='card__bottom' data-value={part1} />
                        </span>
                    </span>
                    <span className={`flip-countdown-card-sec two`}>
                        <span className='card__top'>{part2}</span>
                        <span className='card__bottom' data-value={prev2} />
                        <span className='card__back' data-value={prev2}>
                            <span className='card__bottom' data-value={part2} />
                        </span>
                    </span>
                </span>
                {'bottom' === titlePosition && (
                    <span className='flip-countdown-title'>{data.title}</span>
                )}
            </span>
        );
    };

    return (
        <div className={`flip-countdown theme-${theme} size-${size}`}>
            {!hideYear && getPiece(clock.year)}
            {!hideMonth && getPiece(clock.month)}
            {!hideDay && getPiece(clock.day)}
            {!hideHour && getPiece(clock.hour)}
            {!hideMinute && getPiece(clock.minute)}
            {!hideSecond && getPiece(clock.second)}
        </div>
    );
};

FlipCountdown.propTypes = {
    /**
     * The theme of Flip countdown component.
     */
    theme: T.oneOf(['light', 'dark']),

    /**
     * The size of Flip countdown component card.
     */
    size: T.oneOf(['large', 'medium', 'small', 'extra-small']),

    /**
     * Date/time value for the counter.
     */
    endAt: T.string,

    /**
     * Hide Year counter.
     */
    hideYear: T.bool,

    /**
     * Hide Month counter.
     */
    hideMonth: T.bool,

    /**
     * Hide Day counter.
     */
    hideDay: T.bool,

    /**
     * Hide Hour counter.
     */
    hideHour: T.bool,

    /**
     * Hide Minute counter.
     */
    hideMinute: T.bool,

    /**
     * Hide Second counter.
     */
    hideSecond: T.bool,

    /**
     * Title Position.
     */
    titlePosition: T.oneOf(['top', 'bottom'])
};

export default FlipCountdown;
