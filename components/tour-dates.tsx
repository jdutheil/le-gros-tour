import TourDateItem from '@/components/tour-date-item';

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
        <TourDateItem key={`tourdate-${index}`} tourDate={tourDate} />
      ))}
    </div>
  );
}
