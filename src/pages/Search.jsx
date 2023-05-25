import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MoleculeCard from "../components/MoleculeCard"

const searchURL = import.meta.env.VITE_API

const Search = () => {

  const [searchParams] = useSearchParams()

  const [molecules, setMolecules] = useState([])
  const query = searchParams.get("q")

  const getSearchMolecules = async () => {
    try {
      const response = await fetch(searchURL);
      const data = await response.json();
  
      // Filtra os elementos que contêm a letra "m" no campo desejado
      const filteredElements = data.filter(element => {
        const fieldValue = element.name.toLowerCase(); // Substitua "campo_desejado" pelo campo correto no seu JSON
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

  return (
    <div>
        <h2 className="text-mol text-3xl text-center my-0 mt-8 mb-1 uppercase font-bold">Resultados para: <span className="text-hidro uppercase">{query}</span></h2>
        <div className="flex flex-wrap justify-between p-8 max-w-7xl m-auto items-center">
          {molecules.length === 0 && <h3 className="uppercase text-mol">Não há moléculas para: <span className="text-hidro uppercase">{query}</span></h3>}
          {molecules.length > 0 && molecules.map((molecule) => (<MoleculeCard molecule={molecule} key={molecule.id} />))}
        </div>
      </div>
  )
};

export default Search;
