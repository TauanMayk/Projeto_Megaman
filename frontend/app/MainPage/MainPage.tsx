import { BossesList } from "src/Components/BossesList/BossesList";
import { useState } from "react";
import { WeaponsList } from "src/Components/WeaponsList/WeaponsList";

export const MainPage = () => {
  const [openPage, setOpenPage] = useState(false);

  return (
    <main className="flex items-center justify-center pt-16 pb-4 min-h-screen">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1 className="text-2xl font-medium text-white text-shadow-cyan-200 font-sans leading-1">
          PRESS START
        </h1>
        <BossesList />
        <button
          onClick={() => setOpenPage(!openPage)}
          className="text-2xl font-bold text-white font-sans leading-1 rounded-2xl p-4 cursor-pointer bg-emerald-950 border-2 border-black mb-2 hover:bg-emerald-500 hover:scale-125 transition duration-400"
        >
          Weapons
        </button>
        {openPage && <WeaponsList />}
      </div>
    </main>
  );
};
