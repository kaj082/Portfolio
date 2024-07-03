'use client';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export const LocoProvider = ({ children }) => {
  const containerRef = useRef(null);
  const pathname = usePathname();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[pathname]}
      containerRef={containerRef}>
      <main data-scroll-container ref={containerRef}>
        <div data-scroll-section>{children}</div>
      </main>
    </LocomotiveScrollProvider>
  );
};
