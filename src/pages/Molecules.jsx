import { useState, useEffect } from "react";
import MoleculeCard from "../components/MoleculeCard";

const moleculesURL = "https://work-chemical-backend.vercel.app/molecules/";

const Molecules = () => {
  const [molecules, setMolecules] = useState([])
  const getMolecules = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMolecules(data);
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
