import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const moleculeURL = import.meta.env.VITE_API

const Molecule = () => {
  const { id } = useParams()
  const [molecule, setMolecule] = useState(null)

  const getMolecule = (url) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((resp) => resp.json())
    .then((data) => {
      setMolecule(data)
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getMolecule(`${moleculeURL}${id}`)
  }, [id])

  function formatFormulaWithSubscript(formula) {
    const parts = formula.split(/(\d+)/g);
    const formattedParts = parts.map((part, index) => {
      if (/\d+/.test(part)) {
        return <sub key={index}>{part}</sub>;
      }
      return part;
    });
    return formattedParts;
  }

  return <div className="w-full flex items-center justify-center">
    <div className="w-9/12 bg-molecule rounded-2xl p-6">
      {molecule && (
        <>
          <div className="min-h-full">
            <h2 className="text-name uppercase font-bold ml-10 text-3xl my-0 mt-8 mb-1">{molecule.name}</h2>
          </div>
          <div className="flex items-center mt-4 w-full justify-between">
            <div className="h-96">
              <iframe src={molecule.iframe} className="w-full h-full ml-10 rounded-lg" />
            </div>
            <div className="flex flex-col h-96 justify-center">
              <img src={molecule.img} alt={`Imagem da molécula: ${molecule.name} em 2D`} className="h-48" />
              <div>
                <div>
                  <p className="uppercase mt-2 font-semibold text-name">Formula: </p>
                  <div className="bg-name w-6/12 h-1"></div>
                  <p className="bg-carb p-1 w-full mt-1 uppercase"><span className="text-name">{formatFormulaWithSubscript(molecule.formula)}</span></p>
                </div>
                <div>
                  <p className="uppercase mt-2 font-semibold text-name">Classe: </p>
                  <div className="bg-name w-6/12 h-1"></div>
                  <p className="bg-carb p-1 mt-1 uppercase w-full"><span className="text-name">{molecule.classe}</span></p>
                </div>
              </div>
            </div>
            <div className="h-96 w-64 flex flex-col items-center p-3 text-left"> 
              <h3 className="text-2xl uppercase mb-2">Funções no dia-a-dia: </h3>
              <div className="w-full text-justify overflow-auto rounded-lg">
                <p className="bg-mol-text w-full break-all p-4 text-white">
                  {molecule.dad}
                </p>
              </div>
            </div>
          </div>
        </> 
      )}
    </div>
  </div>;
};

export default Molecule;
