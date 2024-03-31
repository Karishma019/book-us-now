import { FaLocationDot } from "react-icons/fa6";

function Show({ eventName, cityName, date, weather, distanceKm, imgUrl }) {
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
    <>
      <div className="relative flex-none w-64 h-96 bg-slate-600 text-black rounded-xl mt-10">
        <img src={imgUrl} alt={eventName} />
        <div className="absolute bottom-0 flex gap-2 py-4 px-1.5">
          <div className="leading-loose">
            <p className="text-white text-[0.8rem]"> {eventName}</p>
            <p className="flex text-[0.7rem] text-grey gap-1 items-center">
              <FaLocationDot />
              <span>{cityName}</span>
            </p>
          </div>
          <div className="text-[0.7rem] text-grey leading-loose">
            <p> {formattedDate}</p>
            <p>
              <span>{weather}</span> | <span>{formattedDistance}km</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Show;
