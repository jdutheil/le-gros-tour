export interface TourDate {
  date: string;
  city: string;
  zipCode: string;
  eventName: string;
}

export type TourDatesProps = {
  tourDates: TourDate[];
};

export default function TourDates({ tourDates }: TourDatesProps) {
  return (
    <div className='mt-8'>
      {tourDates.map((tourDate, index) => (
        <div
          key={`tourdate-${index}`}
          className='mb-6 flex flex-col items-center'
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
      ))}
    </div>
  );
}
