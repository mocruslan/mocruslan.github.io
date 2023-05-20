import React, {useEffect, useState} from 'react';
import {FiChevronUp} from 'react-icons/fi';

const useScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollToTop);
        return function cleanup() {
            window.removeEventListener('scroll', scrollToTop);
        };
    });

    const scrollToTop = () => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
            setShowScroll(false);
        }
    };

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <FiChevronUp
                className="scrollToTop"
                onClick={backToTop}
                style={{
                    height: 40,
                    width: 40,
                    padding: 7,
                    borderRadius: 50,
                    right: 50,
                    bottom: 50,
                    display: showScroll ? 'flex' : 'none',
                }}
            />
        </>
    );
}

export default useScrollToTop;
