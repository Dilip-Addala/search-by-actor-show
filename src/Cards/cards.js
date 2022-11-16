import NoImage from "../noImage/Noimg.png";

const Cards = (props) => {
  const { details, category } = props;
  let data;

  if (category === "people") {
    data = details?.person;
    const emptyImgCheck = details?.person?.image;
    const emptyCountryCheck = details?.person?.country;
    if (emptyImgCheck === null || emptyCountryCheck === null) {
      return null;
    }
  } else if (category === "shows") {
    data = details?.show;
    const emptyImgCheck = details?.show?.image;
    const emptySummaryCheck = details?.show?.summary;
    const emptyPremierCheck = details?.show?.premiered;
    if (
      emptyImgCheck === null ||
      emptySummaryCheck === "" ||
      emptySummaryCheck === null ||
      emptyPremierCheck === null
    ) {
      return null;
    }
  }

  //   const emptyCheck = data.img

  const image = data?.image?.medium ? data?.image.medium : NoImage;
  const rating = data?.rating?.average ? data.rating.average : "--";

  return (
    <a
      href={data?.url}
      target="blank"
      className="w-1/5 ring-2 ring-slate ring-offset-white bg-white p-3 rounded-xl mr-5 ml-11 min-h-max overflow-hidden mb-5 mt-5 shadow-2xl"
    >
      <div className="flex flex-col items-center w-full border-3 ">
        {data?.name && (
          <h1 className="text-2xl font-bold font-serif mb-3 text-slate-600">
            {data.name}
          </h1>
        )}
        <img src={image} alt={data?.name} className="w-72 h-52" />
        {data?.premiered && (
          <h1 className="text-2xl font-bold font-serif mb-3 mt-3 text-slate-600">
            Premiered: {data.premiered}
          </h1>
        )}
        {data?.country && (
          <h1 className="text-xl font-bold font-serif mb-3 mt-3 text-blue-500">
            Country: {data.country.name}
          </h1>
        )}
        {data.summary && (
          <div className="h-52 overflow-scroll">
            <div dangerouslySetInnerHTML={{ __html: data.summary }} />
          </div>
        )}
        {data?.rating && (
          <p className="text-2xl font-bold font-serif mb-3 text-slate-600 mt-3 shadow-md">
            Rating: {rating}
          </p>
        )}
      </div>
    </a>
  );
};

export default Cards;
