import { FiBookmark, FiHeart } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export const CardMovie = ({ title, imgSrc }) => {
  /* let img_path = "https://image.tmdb.org/t/p/w500"; */
  return (
    <>
      <div className="relative rounded-2xl h-full cursor-pointer">
        <img
          src={"https://image.tmdb.org/t/p/original/" + imgSrc}
          alt=""
          className="rounded-2xl h-full"
        />
        <div
          className="absolute inset-0 flex items-end
        bg-gradient-to-t from-black/60 to-transparent rounded-2xl"
        >
          <div className="p-4 text-white">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="space-x-4 mt-4">
              <button
                className="btn
                    bg-[#050708]
                    rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center"
              >
                <FiHeart />
              </button>

              <button
                className="btn bg-[#050708]
                    rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center"
              >
                <FiBookmark />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
