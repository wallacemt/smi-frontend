import { Link, useLocation } from "react-router";

export const ErorNotFound = () => {
  const location = useLocation();
  const url = location.pathname;
  return (
    <div className="w-full py-6 flex flex-col items-center justify-center">
      <div className="sm:mt-0 mt-6 text-center w-full flex flex-col gap-2">
        <h1 className="font-bold font-principal text-amber-500 lg:w-[30%] lg:mx-auto " style={{ fontSize: "2rem" }}>
          404 - Pagina não encontrada!
        </h1>
        <p className="text-lg font-secundaria font-semibold text-white mt-4">
          A pagina <span className="bg-black text-white font-bold rounded-lg p-1">{url}</span> não foi encontrada.
        </p>
        <Link
          to={"/"}
          className="bg-red-800/80 hover:bg-red-800 font-bold py-2 px-4 rounded-md mt-8 w-80 mx-auto"
          style={{ color: "white" }}
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};
