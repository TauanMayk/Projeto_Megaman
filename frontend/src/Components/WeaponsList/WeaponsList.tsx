import { useEffect, useState } from "react";
import axios from "axios";
import type { Weapons } from "src/interfaces/weaponsInterface";

export const WeaponsList = () => {
  const [weapons, setWeapons] = useState<Weapons[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CarregarDatas = async () => {
      try {
        const res = await axios.get(`https://projeto-megaman-backend.onrender.com/megaman-weapons`);
        setWeapons(res.data.megamanWeapons);
        setLoading(false);
      } catch (error) {
        console.log(`error: ${error}`);
        setLoading(false);
      }
    };
    CarregarDatas();
  }, []);

  if (loading) return <p className="text-xl text-red-500">Carregando...</p>;

  return (
    <>
      <div className="rounded-3xl flex items-center bg-blue-500 border-gray-200 border-4 p-6 space-y-4 w-1/2 h-2/3">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 p-4 border-4 border-cyan-800">
          {weapons.map((weapons) => (
            <li
              key={weapons.id}
              className="bg-blue-400 border-4 p-2 border-gray-400 gap-1 flex flex-col items-center justify-center"
            >
              <img
                src={weapons.image}
                alt={weapons.name}
                className="w-auto h-auto mx-auto"
              />
              <h3 className="text-xl mt-2 font-mono text-white">
                {weapons.name.toUpperCase()}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
