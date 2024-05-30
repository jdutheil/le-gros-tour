'use client';

import { TourDate } from '@/components/tour-dates';
import { useInView } from 'react-intersection-observer';

export type TourDateItemProps = {
  tourDate: TourDate;
};

export default function TourDateItem({ tourDate }: TourDateItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  return (
    <div
      className={`mb-6 flex flex-col items-center ${
        inView ? 'animate-fade-in' : 'opacity-0'
      }`}
      ref={ref}
    >
      <div className='flex flex-row gap-1'>
        <span className='text-md'>{tourDate.date}</span>
        <span className='text-md text-gray-500'>-</span>

        <p className='text-md text-red-600 uppercase'>
          {tourDate.city} ({tourDate.zipCode})
        </p>
      </div>

      <div>
        <span className='text-lg'>{tourDate.eventName}</span>
      </div>
    </div>
  );
}
