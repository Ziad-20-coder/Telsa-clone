type CardProps = {
  image: string;
  header: string;
  description: string;
  mainBTN: string;
  subBTN: string;
  tag: string;
};

const Card = ({
  image,
  header,
  description,
  mainBTN,
  subBTN,
  tag,
}: CardProps) => {
  return (
    <div className="relative min-h-130 lg:min-h-125 min-w-82.5 md:min-w-170 lg:min-w-247.5">
      <div className="absolute inset-0 flex items-center overflow-hidden  rounded-md snap-center">
        <img src={image} alt={header} className="h-full w-full object-cover" />
        <div className="absolute inset-0 p-4 flex flex-col">
          <div className="flex justify-start">
            <button className="bg-white/30 px-3 py-1 rounded-md text-white">{tag}</button>
          </div>
          <div className="flex-1 flex flex-col justify-end gap-2">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-white text-2xl lg:text-4xl font-bold">{header}</h2>
              <p className="text-white underline">{description}</p>
            </div>
            <div className="flex items-stretch gap-2 lg:max-w-[40%]">
              <button className="primary-btn px-3 py-2 flex-1 text-white font-semibold cursor-pointer">
                {mainBTN}
              </button>
              <button className="secondary-btn px-3 py-2 flex-1 text-black font-semibold cursor-pointer">
                {subBTN}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
