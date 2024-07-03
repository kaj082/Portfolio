'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const RippleButton = ({ children, onClick, className, href, target }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 500);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <>
      {href ? (
        <Link
          href={href}
          target={target}
          className={`relative inline-block cursor-pointer overflow-hidden border-0 px-10 py-3 leading-none ${className}`}
          onMouseDown={(e) => {
            const rect = e.target.getBoundingClientRect();
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            onClick && onClick(e);
          }}>
          {isRippling ? (
            <span
              className='animate-rippleEffect absolute block h-5 w-5 rounded-full bg-[rgba(255,255,255,0.3)] opacity-100'
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ''
          )}
          <span className='relative z-10'>{children}</span>
        </Link>
      ) : (
        <button
          className={`relative inline-block cursor-pointer overflow-hidden border-0 bg-[#1976d2] px-10 py-3 leading-none text-white transition-all duration-300 active:scale-95 ${className}`}
          onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            onClick && onClick(e);
          }}>
          {isRippling ? (
            <span
              className='animate-rippleEffect absolute block h-5 w-5 rounded-full bg-[rgba(255,255,255,0.3)] opacity-100'
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ''
          )}
          <span className='relative z-10'>{children}</span>
        </button>
      )}
    </>
  );
};

export default RippleButton;
