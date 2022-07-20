import React, { useEffect, useState, useRef } from 'react';
import PropsType from 'prop-types';
import moment from 'moment';
import './styles.scss';

const FlipCountdown = (props) => {
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
        titlePosition = 'top',
        endAtZero,
        onTimeUp = () => null,
    } = props;
    let interval = null;
    let prev = moment.duration(moment().diff(moment()));

    useEffect(() => {
        processClock();
        interval = setInterval(() => {
            processClock();
        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [endAt]);

    const processClock = () => {
        const then = moment(endAt);
        const value = moment.duration(then.diff(moment()));

        if (value.milliseconds() < 0) {
            setCompleted(true);
            clearInterval(interval);
            onTimeUp();
            return;
        }

        // Year
        if (!hideYear) {
            clock.year.value[1](value.years());
            clock.year.prevValue[1](prev.years());
            if (
                parseInt(value.years() / 10) !== parseInt(prev.years() / 10) &&
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
                parseInt(value.years() % 10) !== parseInt(prev.years() % 10) &&
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
                parseInt(value.days() / 10) !== parseInt(prev.days() / 10) &&
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
                parseInt(value.days() % 10) !== parseInt(prev.days() % 10) &&
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
                parseInt(value.hours() / 10) !== parseInt(prev.hours() / 10) &&
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
                parseInt(value.hours() % 10) !== parseInt(prev.hours() % 10) &&
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
    };

    const getPiece = (key) => {
        const data = clock[key];
        const [value] = data.value;
        const [prevValue] = data.prevValue;
        const part1 = parseInt(value / 10);
        const part2 = parseInt(value % 10);
        const prev1 = parseInt(prevValue / 10);
        const prev2 = parseInt(prevValue % 10);

        return (
            <span className='flip-countdown-piece' ref={data.ref}>
                {'top' === titlePosition && (
                    <span className='flip-countdown-title'>
                        {props[`${key}Title`] || data.title}
                    </span>
                )}
                <span className='flip-countdown-card'>
                    <span className='flip-countdown-card-sec one'>
                        <span className='card__top'>{part1}</span>
                        <span className='card__bottom' data-value={prev1} />
                        <span className='card__back' data-value={prev1}>
                            <span className='card__bottom' data-value={part1} />
                        </span>
                    </span>
                    <span className='flip-countdown-card-sec two'>
                        <span className='card__top'>{part2}</span>
                        <span className='card__bottom' data-value={prev2} />
                        <span className='card__back' data-value={prev2}>
                            <span className='card__bottom' data-value={part2} />
                        </span>
                    </span>
                </span>
                {'bottom' === titlePosition && (
                    <span className='flip-countdown-title'>
                        {props[`${key}Title`] || data.title}
                    </span>
                )}
            </span>
        );
    };

    if (completed && !endAtZero) {
        return <div className='flip-countdown'>{props.children || endAt}</div>;
    }

    return (
        <div className={`flip-countdown theme-${theme} size-${size}`}>
            {!hideYear && getPiece('year')}
            {!hideMonth && getPiece('month')}
            {!hideDay && getPiece('day')}
            {!hideHour && getPiece('hour')}
            {!hideMinute && getPiece('minute')}
            {!hideSecond && getPiece('second')}
        </div>
    );
};

FlipCountdown.propTypes = {
    /**
     * The theme of Flip countdown component.
     */
    theme: PropsType.oneOf(['light', 'dark']),

    /**
     * The size of Flip countdown component card.
     */
    size: PropsType.oneOf(['large', 'medium', 'small', 'extra-small']),

    /**
     * Date/time value for the counter.
     */
    endAt: PropsType.string,

    /**
     * Hide Year counter.
     */
    hideYear: PropsType.bool,

    /**
     * Hide Month counter.
     */
    hideMonth: PropsType.bool,

    /**
     * Hide Day counter.
     */
    hideDay: PropsType.bool,

    /**
     * Hide Hour counter.
     */
    hideHour: PropsType.bool,

    /**
     * Hide Minute counter.
     */
    hideMinute: PropsType.bool,

    /**
     * Hide Second counter.
     */
    hideSecond: PropsType.bool,

    /**
     * Title Position.
     */
    titlePosition: PropsType.oneOf(['top', 'bottom']),

    /**
     * Change year's title.
     */
    yearTitle: PropsType.string,

    /**
     * Change month's title.
     */
    monthTitle: PropsType.string,

    /**
     * Change day's title.
     */
    dayTitle: PropsType.string,

    /**
     * Change hour's title.
     */
    hourTitle: PropsType.string,

    /**
     * Change minute's title.
     */
    minuteTitle: PropsType.string,

    /**
     * Change second's title.
     */
    secondTitle: PropsType.string,

    /**
     * End at Zero.
     */
    endAtZero: PropsType.bool,

    /**
     * Time Up event
     */
    onTimeUp: PropsType.func
};

export default FlipCountdown;
