'use client';
import gsap from 'gsap';
import React, { useEffect, useId, useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const SplittingComp = ({ viewportOnce = true, speed = 0, className = '', to = { duration: 0 }, stopBreakpoint = 576 }) => {
  const { scroll } = useLocomotiveScroll();
  const id = useId();
  const SplitEl = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (window && document && SplitEl) {
        console.log(SplitEl);
        const Splitting = require('splitting');
        Splitting({ target: SplitEl.current });
      }
    }, 2000);
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();
    const tl = gsap.timeline();
    tl.to(SplitEl.current, to, 'myLabel');
    tl.pause();

    mm.add(`(min-width: ${stopBreakpoint}px)`, () => {
      scroll?.on('call', (func) => {
        if (func === id) {
          tl.play();
        }
      });

      scroll?.on('scroll', () => {
        if (!SplitEl?.current?.classList.contains('is-inview')) {
          tl.reverse();
        }
      });
    });

    mm.add(`(max-width: ${stopBreakpoint}px)`, () => {
      tl.pause(tl.endTime()).kill();
    });
  }, [scroll]);

  return (
    <div
      data-scroll
      data-scroll-speed={speed}
      data-scroll-call={id}
      data-scroll-repeat={!viewportOnce}
      className={`loco-el${className ? ` ${className}` : ''}`}
      ref={SplitEl}>
      Splitting js
    </div>
  );
};

export default SplittingComp;
