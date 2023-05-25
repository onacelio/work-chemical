import { useState } from "react";
import "./Tabs.css"
import cadeia from "./../assets/cadeia.jpg"
import alcano from "./../assets/alcano.jpg"
import alceno from "./../assets/alceno.webp"
import alcino from "./../assets/alcino.webp"
import alcadieno from "./../assets/alcadieno.webp"
import cicloalcano from "./../assets/cicloalcanos.webp"
import cicloalceno from "./../assets/cicleno.webp"
import cicloalcino from "./../assets/cicloalcino.webp"

const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <div className="container mb-6">
        <div className="bloc-tabs">
            <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
            >
                1
            </button>
            <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
            >
                2
            </button>
            <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
            >
                3
            </button>
            <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
            >
                4
            </button>
            <button
                className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}
            >
                5
            </button>
            <button
                className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(6)}
            >
                6
            </button>
            <button
                className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(7)}
            >
                7
            </button>
            <button
                className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(8)}
            >
                8
            </button>
        </div>

        <div className="content-tabs">
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <h2 className="text-3xl uppercase">Definição de Hidrocarbonetos</h2>
                <hr />
                <div className="flex">
                    <p className="p-3 text-base">
                        Os hidrocarbonetos são compostos formados apenas por carbono e hidrogênio, com fórmula geral C<sub>x</sub>H<sub>y</sub>. Eles podem ser classificados de acordo com a forma da cadeia carbônica principal e as ligações das cadeias carbônicas. Os hidrocarbonetos alifáticos são formados por cadeias carbônicas abertas ou acíclicas, enquanto os hidrocarbonetos cíclicos são formados por cadeia carbônica fechada ou cíclica. Os hidrocarbonetos saturados são compostos formados por ligações simples entre os átomos de carbono e hidrogênio, enquanto os hidrocarbonetos insaturados são compostos que possuem ligações duplas ou triplas entre os átomos de carbono e hidrogênio. Os hidrocarbonetos aromáticos são hidrocarbonetos de cadeia fechada com ligações simples e duplas alternadas.
                        <br/><br/>
                        Os hidrocarbonetos são moléculas apolares, homogêneas e formadas por átomos de carbono e hidrogênio. Eles podem ser saturados, como no caso dos alcanos e cicloalcanos, nos quais não se tem a presença de duplas ou triplas ligações, ou podem ser insaturados, como alcenos, alcinos, ciclenos, entre outros. A maior fonte de hidrocarbonetos é o petróleo e o gás natural, mas eles podem ser encontrados também em seringueiras e óleos essenciais. Já os compostos do tipo alcino e ciclino só podem ser obtidos de forma sintética. A nomenclatura dos hidrocarbonetos é definida através de regras que envolvem prefixos e sufixos, levando em conta o número de carbonos e a presença de insaturações e ramificações.
                    </p>
                    <img src={cadeia} alt="" className="p-3"/> 
                </div>
            </div>

            <div
                className={toggleState === 2 ? "content  active-content" : "content"}
            >
                <h2 className="uppercase text-3xl">Alcano</h2>
                <hr />
                <div className="flex w-full">
                    <p className="p-3">
                        Os alcanos são compostos orgânicos que pertencem à classe dos hidrocarbonetos, que incluem também os cicloalcanos, alcenos, alcinos, dienos, polienos, benzeno e derivados do benzeno, formados apenas por carbono e hidrogênio. Eles são compostos não-cíclicos formados somente por ligações químicas C-C e C-H. A cadeia formada apenas por ligações simples é chamada de saturada, enquanto a presença de ligações duplas caracteriza as cadeias insaturadas. Os alcanos apresentam a fórmula geral C<sub>n</sub>H<sub>2n+2</sub>, onde n é o número de carbonos. Eles são chamados de hidrocarbonetos parafínicos ou parafinas.
                        <br />
                        Os alcanos são compostos apolares, insolúveis em água e solúveis em solventes pouco polares, como o clorofórmio e o benzeno. O ponto de ebulição e o ponto de fusão dos alcanos são baixos quando comparados com compostos orgânicos de mesma massa molecular. Os alcanos até 4 átomos de carbono são gases em condições ambientes (de 25°C e 760 mmHg) e com o aumento do número de carbonos e da massa molecular, aumenta o ponto de fusão. Alcanos com 5 a 17 átomos de carbono são líquidos e os demais sólidos pastosos.
                        <br />
                        A nomenclatura dos alcanos não ramificados, conforme as determinações da IUPAC, é construída a partir de um prefixo indicativo do número de átomos de carbono, acrescido do infixo -AN-, que indica a saturação da cadeia, mais o sufixo -O (que caracteriza os hidrocarbonetos). A nomenclatura de alcanos de cadeia ramificada é construída com a adição dos nomes dos grupos substituintes antes da cadeia principal. Veja a seguir o exemplo do 2,2,4-trimetilpentano, um dos componentes da gasolina.
                        <br />
                    </p>
                    <img src={alcano} alt="" className="h-full m-auto p-3"/>
                </div>
            </div>

            <div
                className={toggleState === 3 ? "content  active-content" : "content"}
            >
                <h2 className="uppercase text-3xl">Alceno</h2>
                <hr />
                <div className="flex p-3">
                    <p className="text-xl">
                    Os alcenos são hidrocarbonetos insaturados que apresentam pelo menos uma ligação dupla entre dois carbonos da cadeia principal. Eles são de cadeia aberta e menos abundantes que os alcanos. A fórmula geral dos alcenos é C<sub>n</sub>H<sub>2n</sub> e a numeração da cadeia começa a partir do carbono mais próximo da dupla ligação. O número indicando a posição da insaturação deve ser o menor possível e tem que anteceder o nome do composto, do qual é separado por hífen.
                    <br />
                    Os alcenos são mais reativos que os alcanos, por possuírem uma ligação dupla, que é mais fácil de ser quebrada. Eles sofrem reações de adição e de polimerização. Os alcenos apresentam as seguintes propriedades físicas: são insolúveis em água e solúveis em solventes apolares; são menos densos que a água e os pontos de ebulição aumentam de forma igual, segundo o número de carbonos na cadeia.
                    <br />
                    Um exemplo de alceno é o etileno, que é um gás em condições ambiente. Ele é produzido durante o amadurecimento das frutas e é usado para produzir diversos polímeros e álcool etílico, também conhecido como etanol ou álcool comum.
                    </p>
                    <img src={alceno} alt="" />
                </div>
            </div>

            <div
                className={toggleState === 4 ? "content  active-content" : "content"}
            >
                <h2 className="uppercase text-3xl">Alcino</h2>
                <hr />
                <div className="flex">
                    <p className="p-4">
                        Os alcinos são hidrocarbonetos de cadeia aberta que possuem uma ligação tripla entre carbonos. Eles são insaturados, o que significa que possuem menos átomos de hidrogênio em sua cadeia do que os alcanos. A fórmula geral dos alcinos é C<sub>n</sub>H<sub>2n-2</sub>. Alguns pontos importantes sobre os alcinos são:

                        Os alcinos são mais reativos do que os alcanos e alcenos, devido à maior presença dos elétrons π na ligação tripla entre carbonos.
                        O etino, também conhecido como acetileno, é o alcino mais simples e é amplamente utilizado na indústria química, como combustível para soldas e como matéria-prima para a produção de diversos produtos comerciais, como borrachas sintéticas e plásticos.
                        A grande reatividade da ligação tripla dificulta o encontro de alcinos na natureza. Alguns, entretanto, são encontrados em compostos polifuncionais, como é o caso da dactilina, um produto natural marinho que é inibidor do metabolismo do pentobarbital (anestésico).
                        Os alcinos podem ser obtidos por reações de eliminação de dialetos vicinais (quando os átomos de halogênio se encontram em átomos de carbono que são vizinhos). No caso, primeiramente, deve-se fazer adição de halogênio a um alceno e, em seguida, esse dialeto pode ser submetido a uma reação de desidroalogenação (uma eliminação) dupla com uma base forte, assim produzindo o alcino.
                    </p>
                    <img src={alcino} alt="" className="w-full p-4" />
                </div>
            </div>

            <div
                className={toggleState === 5 ? "content  active-content" : "content"}
            >
                <h2 className="uppercase text-3xl">Alcadieno</h2>
                <hr />
                <div className="flex">
                    <p className="p-4">
                        Os alcadienos, ou dienos, são hidrocarbonetos de cadeia aberta que possuem duas ligações duplas entre carbonos. Eles são insaturados, o que significa que possuem menos átomos de hidrogênio em sua cadeia do que os alcanos. A fórmula geral dos alcadienos é C<sub>n</sub>H<sub>2n-2</sub>. Alguns pontos importantes sobre os alcadienos são:
                        <br />
                        Existem três tipos de alcadienos: acumulados, isolados e conjugados. Os acumulados têm as duas ligações duplas partindo do mesmo carbono, enquanto os isolados têm as ligações duplas separadas por pelo menos duas ligações simples e os conjugados têm as ligações duplas alternadas por uma ligação simples.
                        O isopreno é um exemplo de alcadieno que é encontrado na natureza e é utilizado na produção de borracha natural. <br />
                        Os alcadienos podem ser obtidos por reações de eliminação de di-haletos vicinais, assim como os alcinos. No caso, é necessário fazer adição de halogênio a um alceno e, em seguida, realizar uma reação de desidro-halogenação (uma eliminação) dupla com uma base forte, assim produzindo o alcadieno desejado.  <br />
                        Na nomenclatura, a regra é a mesma da nomenclatura dos alcenos, com a única diferença de que em vez do infixo "-en", é utilizado o infixo "-dien" para indicar as duas ligações duplas entre carbonos. A localização das insaturações deve ser colocada antes do infixo "dien", e a numeração da cadeia principal deve ser feita a partir dos menores números possíveis nas ligações duplas.
                    </p>
                    <img src={alcadieno} alt="" className="w-full p-4" />
                </div>
            </div>

            <div
                className={toggleState === 6 ? "content  active-content" : "content"}
            >
                <h2 className="uppercase text-3xl">Cicloalcano</h2>
                <hr />
                <div className="flex">
                    <p className="p-4">
                        Os cicloalcanos, também conhecidos como ciclanos, são hidrocarbonetos cíclicos de cadeia fechada que possuem somente ligações simples entre seus carbonos. Eles são encontrados em parafinas e no petróleo à base de naftênicos. Alguns pontos importantes sobre os cicloalcanos são:
                        <br />
                        <ul className="p-4">
                            <li>
                                A nomenclatura dos cicloalcanos é similar à dos alcanos, mas com a adição da palavra "ciclo" no início. Por exemplo, o cicloalcano de cinco carbonos é chamado de ciclopentano.
                            </li>
                            <li>
                                Os cicloalcanos possuem maior rigidez e simetria do que os alcanos, o que faz com que suas constantes físicas sejam ligeiramente mais altas.
                            </li>
                            <li>
                                Os cicloalcanos apresentam isomeria cis/trans, que ocorre quando os substituintes se encontram por diferentes lados da molécula. Quando estão no mesmo lado, diz-se que estão na forma cis, e quando estão em lados opostos, diz-se que estão na forma trans.
                            </li>
                            <li>
                                Os cicloalcanos possuem maiores pontos de fusão e ebulição do que os alcanos com o mesmo número de carbonos, devido à rigidez do anel, que permite um maior número de interações intermoleculares.
                            </li>
                            <li>
                                Os cicloalcanos de pequeno tamanho, como o ciclopropano e o ciclobutano, apresentam uma tensão importante devido aos ângulos de ligação e eclipsamentos. Já os cicloalcanos de maior tamanho, como o ciclopentano e o ciclohexano, estão quase livres de tensão.
                            </li>
                            <li>
                                O ciclohexano apresenta um equilíbrio conformacional que interconverte os hidrogênios equatoriais em axiais e vice-versa. Quando está substituído, a conformação que mais grupos situa em posição equatorial é a mais estável.
                            </li>
                        </ul>
                        
                    </p>
                    <img src={cicloalcano} alt="" className="w-full p-4" />
                </div>
            </div>

            <div
                className={toggleState === 7 ? "content  active-content" : "content"}
            >
                <h2 className="uppercase text-3xl">Cicloalceno</h2>
                <hr />
                <div className="flex">
                    <p className="p-4">
                    Os cicloalcenos, também conhecidos como ciclenos ou cicloalquenos, são hidrocarbonetos cíclicos que possuem uma ligação dupla endocíclica, ou seja, na cadeia cíclica. Sua fórmula geral é C<sub>n</sub>H<sub>2n-2</sub>, a mesma dos alcenos. Alguns pontos importantes sobre os cicloalcenos são:

                    A nomenclatura dos cicloalcenos é similar à dos alcenos, mas com a adição da palavra "ciclo" no início. A quantidade de carbonos no ciclo é identificada pelos mesmos prefixos utilizados para os alcanos e cicloalcanos.
                    Os cicloalcenos podem apresentar isomeria cis/trans, assim como os alcenos. Quando os substituintes estão no mesmo lado da molécula, diz-se que estão na forma cis, e quando estão em lados opostos, diz-se que estão na forma trans.
                    A reatividade dos cicloalcenos é semelhante à dos alcenos, e eles podem ser submetidos a diversas reações, como adição de halogênios, hidrogenação e oxidação.

                    </p>
                    <img src={cicloalceno} alt="" className="w-full p-4" />
                </div>
            </div>

            <div
                className={toggleState === 8 ? "content  active-content" : "content"}
            >
                <h2 className="uppercase text-3xl">Cicloalcino</h2>
                <hr />
                <div className="flex">
                    <p className="p-4">
                        Os cicloalcinos, também conhecidos como ciclenos ou cicloalquinos, são hidrocarbonetos cíclicos que possuem uma ligação tripla endocíclica, ou seja, na cadeia cíclica. Sua fórmula geral é CnH2n-4, a mesma dos alcinos. Alguns pontos importantes sobre os cicloalcinos são:
                        <br />
                        A nomenclatura dos cicloalcinos é similar à dos alcinos, mas com a adição da palavra "ciclo" no início. A quantidade de carbonos no ciclo é identificada pelos mesmos prefixos utilizados para os alcanos e cicloalcanos. <br />
                        Os cicloalcinos podem apresentar isomeria cis/trans, assim como os alcinos. Quando os substituintes estão no mesmo lado da molécula, diz-se que estão na forma cis, e quando estão em lados opostos, diz-se que estão na forma trans. <br />
                        Os cicloalcinos são menos estáveis do que os cicloalcanos e cicloalcenos devido à tensão angular e a tensão da ligação tripla, que é maior do que a tensão da ligação dupla nos alcenos. Por isso, eles são menos comuns na natureza e em aplicações industriais.

                    </p>
                    <img src={cicloalcino} alt="" className="w-full p-4" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Tabs
