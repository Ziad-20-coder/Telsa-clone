const Dots = ({ active, index, func }: { active: boolean, index: number, func: (number: number) => void }) => {
  return (
    <button
      onClick={() => func(index)}
      className={`${active ? "w-8 bg-white" : "w-4 bg-white/40"} h-2 rounded-md cursor-pointer`}
    ></button>
  );
};

export default Dots;
