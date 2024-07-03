'use client';
import React, { useEffect, useId, useRef } from 'react';

// Libraries
import { gsap } from 'gsap';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Animator = ({
  children,
  to = { duration: 0 },
  viewportOnce = true,
  speed = 0,
  className = '',
  innerClassName = '',
  stopBreakpoint = 576,
  ...props
}) => {
  const LocoEl = useRef(null);
  const GsapEl = useRef(null);
  const id = useId();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    let mm = gsap.matchMedia();
    const tl = gsap.timeline();
    tl.to(GsapEl.current, to, 'myLabel');
    tl.pause();

    mm.add(`(min-width: ${stopBreakpoint}px)`, () => {
      scroll?.on('call', (func) => {
        if (func === id) {
          tl.play();
        }
      });

      scroll?.on('scroll', () => {
        if (!LocoEl?.current?.classList.contains('is-inview')) {
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
      ref={LocoEl}
      data-scroll-call={id}
      data-scroll-repeat={!viewportOnce}
      className={`loco-el${className ? ` ${className}` : ''}`}>
      <props.as ref={GsapEl} className={`gsap-el inline-block${innerClassName ? ` ${innerClassName}` : ''}`}>
        {children}
      </props.as>
    </div>
  );
};

export default Animator;
