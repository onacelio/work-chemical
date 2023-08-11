import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MoleculeCard from "../components/MoleculeCard"

const searchURL = import.meta.env.VITE_API

const Search = () => {
  const moleculesPerPage = 9
  const [searchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  const [molecules, setMolecules] = useState([])
  const query = searchParams.get("q")

  const getSearchMolecules = async () => {
    try {
      const response = await fetch(searchURL);
      const data = await response.json();
  
      const filteredElements = data.filter(element => {
        const fieldValue = element.name.toLowerCase();
        return fieldValue.includes(query);
      });
  
      setMolecules(filteredElements);
    } catch (error) {
      console.log('Erro ao buscar elementos:', error);
    }
  };
  

  useEffect(() => {
    getSearchMolecules(searchURL)
  }, [query])

  const indexOfLastMolecule = currentPage * moleculesPerPage;
  const indexOfFirstMolecule = indexOfLastMolecule - moleculesPerPage; 
  const currentMolecules = molecules.slice(indexOfFirstMolecule, indexOfLastMolecule);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
        <h2 className="text-mol text-3xl text-center my-0 mt-8 mb-1 uppercase font-bold">Resultados para: <span className="text-hidro uppercase">{query}</span></h2>
        <div className="flex flex-wrap justify-between p-8 max-w-7xl m-auto items-center">
          {currentMolecules.length === 0 && <h3 className="uppercase text-mol">Não há moléculas para: <span className="text-hidro uppercase">{query}</span></h3>}
          {currentMolecules.length > 0 && currentMolecules.map((molecule) => (<MoleculeCard molecule={molecule} key={molecule.id} />))}
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
  )
};

export default Search;
