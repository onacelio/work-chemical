import { Link } from "react-router-dom" 

const MoleculeCard = ({ molecule, showLink = true }) => {
  return (
    <div className="w-30-pc text-white mb-10 flex flex-col justify-between bg-card p-4">
        <h2 className="mb-4 bg-bg-mol text-center uppercase rounded font-semibold">{molecule.name}</h2>
        <img src={molecule.img} alt={`Imagem 2D do ${molecule.name}`} className="w-full mb-4 rounded" />
        {showLink && <Link to={`/molecules/${molecule.id}`} className="bg-bg-mol text-center rounded p-4">DETALHES</Link>}
    </div>
  )
}

export default MoleculeCard
