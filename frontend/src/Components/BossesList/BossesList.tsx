import { useEffect, useState } from "react";
import axios from "axios";
import type { Bosses } from "src/interfaces/bossesInterface";
import { BossesDescription } from "../BossesDescription/BossesDescription";
import FsLightbox from "fslightbox-react";

export const BossesList = () => {
  const [bosses, setBosses] = useState<Bosses[]>([]);
  const [loading, setLoading] = useState(true);
  const [personagemSelecionado, setPersonagemSelecionado] =
  useState<number>(Number);
  const [islightboxOpen, setIslightboxOpen] = useState(false);

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

  const fecharLightbox = () => {
    setIslightboxOpen(false);
  };

  return (
    <>
      <div className="rounded-3xl flex items-center bg-blue-500 border-gray-200 border-4 p-6 space-y-4 w-1/2 h-2/3">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {bosses.map((boss) => (
            <li
              key={boss.id}
              className="bg-amber-200 border-4 p-2 border-gray-200 flex flex-col items-center justify-center rounded-2xl"
            >
              <img
                src={boss.image}
                alt={boss.name}
                className="w-auto h-auto mx-auto hover:scale-125 transition duration-400"
              />
              <button
                className="text-xl font-bold text-white font-sans leading-1 rounded-2xl p-4 cursor-pointer bg-emerald-950 border-2 border-black mb-2 hover:bg-emerald-500 hover:scale-125 transition duration-400"
                onClick={() => {
                  (setPersonagemSelecionado(boss.id),
                    console.log(personagemSelecionado),
                    setIslightboxOpen(true));
                }}
              >
                Description
              </button>
              <FsLightbox
                toggler={islightboxOpen}
                sources={[
                  <BossesDescription
                    personagemSelecionado={personagemSelecionado}
                    key={boss.id}
                  />,
                ]}
                onClose={fecharLightbox}
              />
              <h3 className="text-xl mt-2 font-mono text-white">
                {boss.name.toUpperCase()}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

//
