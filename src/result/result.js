const Results = (props)=>{
    const {details} = props
    // let image = details.image.medium
    const image = details.image===null?"":details.image.medium; 
    // const description = parse(details.summary)
    console.log(details)
    return(
        <div className="w-1/4 bg-white p-3 rounded-xl mr-5 ml-12 min-h-max overflow-hidden mb-5">
            <a href={details.url} target="_blank">
                <div className="flex flex-col w-full border-3 ">
                    <img src={image} className="w-full"/> 
                    {details.summary}
                </div>
            </a>
        </div>
    )
}

export default Results