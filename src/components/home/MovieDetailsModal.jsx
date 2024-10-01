// eslint-disable-next-line react/prop-types
const Modal = ({ setOpenModal, data }) => {
  console.log(data?.[0]?.Poster);
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[3px]"
      onClick={() => setOpenModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[45rem]  p-5 gap-12 flex flex-col rounded-[1rem] border border-primary-light"
      >
        <div>
          <img src={data?.[0]?.Poster} className="h-64 w-full object-cover" />

          <div>
            <h1>Title:{data?.[0]?.Title}</h1>
            <p>MovieType : {data?.[0]?.Type}</p>
            <p>RelaseYear : {data?.[0]?.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
