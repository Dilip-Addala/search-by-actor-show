import NoImage from "../noImage/Noimg.png"

const Cards = (props) => {
  const { details,category } = props;
  console.log(details)
  let data
  let id

  if (category==="people"){
    data = details?.person;
    id = details?.person?.id;
  }else if(category==="shows"){
    data = details?.show;
    id = details?.show?.id;
  }
  
  const image = data?.image?.medium ?  data?.image.medium : NoImage

  return (
    <a key={id}
      href={data?.url}
      target="blank"
      className="w-1/5 ring-2 ring-slate ring-offset-white bg-white p-3 rounded-xl mr-5 ml-12 min-h-max overflow-hidden mb-5 mt-5 shadow-2xl"
    >
      <div className="flex flex-col items-center w-full border-3 ">
        {data?.name && (
          <h1 className="text-2xl font-bold font-serif mb-3 text-slate-600">
            {data.name}
          </h1>
        )}
        <img src={image} alt={data?.name} className="w-72 h-52" />
        {data.summary && (
          <div className="h-52 overflow-hidden">
            <p>{data.summary}</p>
          </div>
        )}
        {data?.rating?.average && (
          <p className="text-2xl font-bold font-serif mb-3 text-slate-600 mt-3 shadow-md">
            Rating: {data.rating.average}
          </p>
        )}
      </div>
    </a>
  );
};

export default Cards;
