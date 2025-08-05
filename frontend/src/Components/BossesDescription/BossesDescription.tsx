import { useEffect, useState } from "react";
import axios from "axios";
import type { Bosses } from "src/interfaces/bossesInterface";

export const BossesDescription = ({
  personagemSelecionado,
}: {
  personagemSelecionado: number;
}) => {
  const [bosses, setBosses] = useState<Bosses[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CarregarDatas = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:3333/megaman-bosses`);
        setBosses(res.data.megamanBosses);
        setLoading(false);
      } catch (error) {
        console.log(`error: ${error}`);
        setLoading(false);
      }
    };
    CarregarDatas();
  }, []);

  if (loading) return <p className="text-xl text-white">Carregando...</p>;

  const infos = bosses.map((personagem) => {
    return {
      id: personagem.id,
      name: personagem.name,
      image: personagem.image,
      description: personagem.description,
      stage: personagem.stage,
      weakness: personagem.weakness,
    };
  });

  const personagemSelecionadoFiltrado = infos.find(
    (personagem: { id: number }) => personagem.id === personagemSelecionado
  );

  return (
    <>
      <div className="container flex items-center justify-evenly gap-6 p-5 bg-blue-400">
        <div className="flex items-center justify-center w-1/4 h-1/4 border-4 ml-2 border-gray-500 bg-amber-200">
        <img
          src={personagemSelecionadoFiltrado?.image}
          alt={personagemSelecionadoFiltrado?.name}
        />
        </div>
        <div className="flex flex-col bg-teal-800 rounded-xl items-center gap-4 p-6 w-fit">
        <p className="text-2xl p-2 text-orange-400"><b>Name:</b> {personagemSelecionadoFiltrado?.name}</p>
        <p className="text-xl p-2 text-white"><b>Description:</b> {personagemSelecionadoFiltrado?.description}</p>
        <span className="text-sm p-2 text-green-400"><b>Stage:</b> {personagemSelecionadoFiltrado?.stage}</span>
        <span className="text-base p-2 text-red-400"><b>Weakness:</b> {personagemSelecionadoFiltrado?.weakness}</span>
        </div>
      </div>
    </>
  );
};