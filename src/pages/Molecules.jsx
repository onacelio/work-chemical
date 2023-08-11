import { useState, useEffect } from "react";
import MoleculeCard from "../components/MoleculeCard";

const moleculesURL = import.meta.env.VITE_API;

const Molecules = () => {
  const moleculesPerPage = 9; //define o número de coisas que vai aparecer na tela
  const [molecules, setMolecules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getMolecules = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMolecules(data);
  };

  useEffect(() => {
    getMolecules(moleculesURL);
  }, []);

  const indexOfLastMolecule = currentPage * moleculesPerPage; // 18
  const indexOfFirstMolecule = indexOfLastMolecule - moleculesPerPage; // 9
  const currentMolecules = molecules.slice(indexOfFirstMolecule, indexOfLastMolecule);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2 className="text-white text-3xl text-center my-0 mt-8 mb-1 uppercase text-mol-text font-bold">
        Moléculas
      </h2>
      <div className="w-9/12 bg-black h-1 m-auto mt-4"></div>
      <div className="flex flex-wrap justify-between p-8 max-w-7xl m-auto">
        {molecules.length === 0 && <p className="uppercase font-bold text-mol-text">Carregando...</p>}
        {currentMolecules.map((molecule) => (
          <MoleculeCard molecule={molecule} key={molecule.id} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(molecules.length / moleculesPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mb-10 mx-1 px-3 py-1 rounded-md ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            } hover:bg-blue-700 duration-200`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Molecules;
