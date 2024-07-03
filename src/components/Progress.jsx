import React from 'react';
import Animator from './Animator';

const Progress = ({ className, color = '#232323', percentage = 0, themeStyle = '1', title, direction = 'horizontal', thickness = 50 }) => {
  return (() => {
    switch (themeStyle) {
      case '1':
        return (
          <div
            className={`relative border-[length:var(--thickness)] border-solid border-transparent bg-darkgray bg-clip-padding p-10 text-center text-white before:absolute before:inset-0 before:-z-10 before:-m-[var(--thickness)] before:content-normal before:rounded-[inherit] xl:p-5 xs:py-10 before:bg-[linear-gradient(180deg,var(--color),transparent,transparent)]${
              className ? ` ${className}` : ''
            }`}
            style={{ '--thickness': `${thickness}px`, '--color': color }}>
            <h3 className='mb-2 text-4xl font-bold xl:text-3xl'>
              <span>{percentage}</span>%
            </h3>
            {title && <p>{title}</p>}
          </div>
        );
      case '2':
        return (
          <>
            <div
              className={`relative overflow-hidden${className ? ` ${className}` : ''}`}
              style={direction === 'vertical' ? { width: thickness } : { height: thickness }}>
              <Animator
                as='div'
                to={
                  direction === 'vertical'
                    ? { bottom: `${percentage}%`, duration: 2, delay: 0.2, ease: 'power4.out' }
                    : { left: `${percentage}%`, duration: 2, delay: 0.2, ease: 'power4.out' }
                }
                innerClassName={`absolute aspect-square${
                  direction === 'vertical' ? ` left-1/2 -translate-x-1/2 h-full bottom-0` : ` top-1/2 -translate-y-1/2 w-full left-0`
                }`}
                className='wave-change absolute left-0 top-0 h-full w-full transition-[left,bottom] duration-700'>
                <span className='absolute left-0 top-0 inline-block h-full w-full animate-[rotate_7s_linear_infinite] rounded-[45%_47%_43%_46%] bg-[rgba(255,255,255,0.6)]'></span>
                <span className='relative left-0 top-0 inline-block h-full w-full animate-[rotate_9s_linear_-4s_infinite] rounded-[47%_42%_46%_44%] bg-[rgba(255,255,255,0.6)]'></span>
              </Animator>
              <div
                className={`wave flex h-full w-full${direction === 'vertical' ? ' items-end justify-center' : ' items-center justify-start'}`}
                style={{ background: color }}>
                <span className={`font-semibold text-white${direction === 'vertical' ? ` mb-4` : ` ml-4`}`}>{percentage}%</span>
              </div>
            </div>
          </>
        );
      default:
        return (
          <div
            className={`rounded-xl${className ? ` ${className}` : ''}`}
            style={{ backgroundImage: `linear-gradient(180deg, ${color} ${percentage}%, transparent)` }}>
            <div className='m-[3px] rounded-xl bg-darkgray py-10 text-center text-white'>
              <h3 className='mb-2 text-4xl font-bold'>
                <span data-count='98'>98</span>%
              </h3>
              <p>Figma</p>
            </div>
          </div>
        );
    }
  })();
};

export default Progress;
