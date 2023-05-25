import { useState, useEffect } from "react";
import MoleculeCard from "../components/MoleculeCard";

const moleculesURL = import.meta.env.VITE_API;

const Molecules = () => {
  const [molecules, setMolecules] = useState([])
  const getMolecules = (url) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((resp) => resp.json())
    .then((data) => {
      const shuffledMolecules = data.sort(() => Math.random() - 0.5)
      const selectedMolecules = shuffledMolecules.slice(0, 21)
      setMolecules(selectedMolecules)
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getMolecules(moleculesURL)
  }, [])

  return (
    <div>
      <h2 className="text-white text-3xl text-center my-0 mt-8 mb-1 uppercase text-mol-text font-bold">Moléculas</h2>
      <div className="w-9/12 bg-black h-1 m-auto mt-4"></div>
      <div className="flex flex-wrap justify-between p-8 max-w-7xl m-auto">
        {molecules.length === 0 && <p className="uppercase font-bold text-mol-text">Carregando...</p>}
        {molecules.length > 0 && molecules.map((molecule) => (<MoleculeCard molecule={molecule} key={molecule.id} />))}
      </div>
    </div>
  )
};

export default Molecules;
