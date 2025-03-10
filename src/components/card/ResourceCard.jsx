import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const formatNameForURL = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };
export default function ResourceCard({name, tags, src, category}) {
  
    const detailsUrl = `/resource/${formatNameForURL(name)}`;

  return (
    <Link
    to={detailsUrl}  
    className="bg-dark-charcoal border-4 border-outline rounded-xl border-opacity-15  overflow-hidden w-full hover:border-opacity-50 transition-colors duration-150 ease-in group @container ">
      <div className=" bg-super-dark-gray flex relative items-center justify-center pb-[50%] pt-[50%] rounded-b-2xl">
      <div className="absolute w-2/3 rounded-3xl overflow-hidden transition-all shadow-shine group-hover:shadow-bright bg-transparent bg-opacity-0 ">
          <img
            loading="lazy"
            className="w-full object-cover" quality={100} width={200} height={200}
            src={src}
          />
        </div>
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-dim-gray bg-opacity-25 p-3 rounded-xl backdrop-blur-2xl">
          <GoArrowUpRight size={32} className=" fill-gray" />
        </div>
      </div>

      <div className=" bg-dark-charcoal p-6 flex flex-col @[30rem]:flex-row @[30rem]:items-center justify-between items-start gap-y-4">
        <div>
          <h2 className="font-semibold text-h6 xl:text-h5">{name}</h2>
          <div className="tags">
            {tags.map((tag, index) => (
              <span
                className="pr-3 text-xs xl:text-sm 2xl:text-base text-gradient2"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center px-3 py-1 bg-primary rounded-full text-super-dark-gray font-semibold text-xs xl:text-sm 2xl:text-base">
          <span>{category}</span>
        </div>
      </div>
    </Link>
  );
}
