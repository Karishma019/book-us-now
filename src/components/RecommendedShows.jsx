import useFetch from "../hooks/useFetch";
import Show from "./Show";

function RecommendedShows() {
  const url =
    "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return (
      <div className="container flex justify-center items-center h-60 w-full">
        <div className="animate-spin h-10 w-10 bg-red "></div>
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="container my-10 sm-margin">
        <div className="flex justify-between">
          <h2 className="text-white text-start text-xl">
            Recommended shows &#10230;
          </h2>
          <p className="text-white cursor-pointer underline underline-offset-2">
            see all
          </p>
        </div>
        <div className="flex gap-8 w-full overflow-x-auto no-scroll-bar cursor-pointer">
          {data &&
            data.map((show, index) => {
              if (index >= 8) {
                return;
              }
              return <Show {...show} key={crypto.randomUUID()} />;
            })}
        </div>
      </div>
    </>
  );
}

export default RecommendedShows;
