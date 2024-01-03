'use client'

import React from 'react'
import useScroll from '@/hooks/useScroll';
import { ArrowUpward } from '@mui/icons-material';

export default function ScrollTopButton() {
    const [active, setActive] = React.useState(false);
    const { scroll } = useScroll();

    React.useEffect(() => {
        if (scroll.y > 200) {
            setActive(true);
        } else {
            setActive(false);
        };
    }, [scroll])

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            {active &&
                <button onClick={handleScroll} className='fixed bottom-10 right-10'>
                    <ArrowUpward />
                </button>
            }
        </>
    )
}
