import RecommendedShows from "./RecommendedShows";

function Showcase() {
  return (
    <main className="bg-showCase h-[700px] showCase-banner">
      <div className="container pt-20 text-center">
        <h1 className="text-white text-6xl leading-loose font -xl:text-[3.5rem] -lg:text-[3rem] -md:text-[2.8rem] -sm:text-[2rem]">
          Discover Exciting Events Happening Near You - Stay Tuned For Updates!
        </h1>
        <p className="text-white leading-loose text-slate-50 container -sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
          eligendi iure, cumque laborum
          <span className="hidden">
            perferendis natus ea iusto in itaque sequi!Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Unde eligendi iure, cumque
            laborum perferendis natus ea iusto in itaque sequi!
          </span>
        </p>
      </div>
      <RecommendedShows />
    </main>
  );
}

export default Showcase;
