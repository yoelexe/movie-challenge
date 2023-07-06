// eslint-disable-next-line react/prop-types
export const CardMovie = ({children, imgSrc}) => {
  /* let img_path = "https://image.tmdb.org/t/p/w500"; */
  return (
    <>
      <div  className="relative rounded-2xl h-full cursor-pointer">
        <img src={"https://image.tmdb.org/t/p/original/"+imgSrc} alt=""
        className="rounded-2xl h-full"/>
        <div className="absolute inset-0 flex items-end
        bg-gradient-to-t from-black/60 to-transparent rounded-2xl">
          <div className="p-4 text-white">{children}</div>
        </div>
      </div>
    </>
  );
};
