import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import EventsCard from "./EventsCard";

function UpcomingEvents() {
  const [page, setPage] = useState(1);
  const totalPages = 5;
  const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`;
  console.log(url);

  const { data, isLoading, error } = useFetch(url);

  const handleScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        if (page >= totalPages) {
          return;
        } else {
          setPage((prev) => prev + 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  if (isLoading) {
    return (
      <div className="container flex justify-center items-end h-60 w-full">
        <div className="animate-spin h-10 w-10 bg-red "></div>
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="container my-52 -lg:my-48 -md:my-60 -sm:my-20">
      <div className="flex justify-between text-primary">
        <h2 className="text-start text-xl">Recommended shows &#10230;</h2>
        <p className="cursor-pointer underline underline-offset-2">see all</p>
      </div>
      <div className="my-10 grid grid-cols-3 -md:grid-cols-2 -sm:grid-cols-1">
        {data &&
          data.map((event) => {
            return <EventsCard {...event} key={crypto.randomUUID()} />;
          })}
      </div>
    </div>
  );
}

export default UpcomingEvents;
