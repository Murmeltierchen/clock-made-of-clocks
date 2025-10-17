'use client';

import { getCurrentTime } from '@/utils/getCurrentTime';
import { useEffect, useState } from 'react';

import Digit from './Digit';

export default function Time() {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        setTime(getCurrentTime());

        const timeInterval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    return (
        <div className="flex gap-[0.25vh] items-center max-w-[95vw]">
            <Digit>{time[0]}</Digit>
            <Digit>{time[1]}</Digit>
            <span className="w-[2vh]"></span>
            <Digit>{time[2]}</Digit>
            <Digit>{time[3]}</Digit>
            <span className="w-[2vh]"></span>
            <Digit>{time[4]}</Digit>
            <Digit>{time[5]}</Digit>
        </div>
    );
}
