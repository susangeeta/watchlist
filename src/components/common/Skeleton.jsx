const Skeleton = () => {
  return (
    <div>
      <div
        className={` h-48 lg:h-64 p-1 flex gap-2 flex-col rounded-lg bg-secondary/20`}
      >
        <div className="bg-slate-500 h-full rounded-lg animate-pulse duration-300"></div>
      </div>
    </div>
  );
};

export default Skeleton;
