import { FaLocationDot } from "react-icons/fa6";

function EventsCard({
  eventName,
  cityName,
  date,
  weather,
  distanceKm,
  imgUrl,
}) {
  const originalDate = new Date(date);

  // Subtracting one year from the original date
  originalDate.setFullYear(originalDate.getFullYear() - 1);

  // Formatting the date using toLocaleDateString
  const formattedDate = originalDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedDistance = Math.round(distanceKm).toString().slice(0, 2);

  return (
    <div className="border p-3 m-2 flex flex-col rounded-xl gap-8">
      <div className="w-full h-64 bg-slate-500 rounded-xl relative overflow-hidden">
        <img src={imgUrl} alt={eventName} />
        <p className="absolute bottom-0 bg-[#00000096] text-white text-sm w-full px-2 py-2">
          {formattedDate}
        </p>
      </div>
      <div>
        <p className="text-primary text-sm"> {eventName}</p>
        <div className="flex justify-between">
          <p className="flex text-[0.7rem] text-grey gap-1 items-center">
            <FaLocationDot />
            <span>{cityName}</span>
          </p>
          <p className="text-[0.7rem] text-grey leading-loose">
            <span>{weather}</span> | <span>{formattedDistance}km</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
