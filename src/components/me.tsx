export default function Me() {
  return (
    <div className="flex items-center gap-2 py-4">
      <div>
        <p className="inline  text-xl font-bold tracking-tight text-gray-800 sm:block sm:text-xl">
          Mi chiamo Giuseppe, per gli amici{" "}
          <span className="text-teal-600 ">Giuppi</span>, sono un programmatore
          web da più di 7 anni e da 5{" "}
          <span className="text-teal-600 ">lavoro viaggiando</span> per il
          mondo.
        </p>
        <p className="inline  text-xl font-bold tracking-tight text-gray-700 sm:block sm:text-xl">
          Ho deciso di condividere la mia esperienza da programmatore e da
          <span className="text-teal-600 "> nomade digitale</span> per aiutarti
          a:
        </p>
        <ul className="list-inside list-disc pt-4 font-bold tracking-tight text-gray-700 sm:text-xl">
          <li>
            imparare la{" "}
            <span className="text-teal-600 "> programmazione web</span> facendo
            pratica
          </li>
          <li>
            costruirti un
            <span className="text-teal-600 "> personal brand</span> per trovare
            lavoro in tutto il mondo
          </li>
          <li>
            accompagnarti nel percorso facendoti da{" "}
            <span className="text-teal-600 ">mentore</span> personalmente
          </li>
        </ul>
      </div>
      <div className="hidden flex-shrink-0 md:block">
        <img
          className="h-32 w-32 rounded-full "
          src="https://res.cloudinary.com/de30mupo1/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_300/v1674753936/Progetto_senza_titolo_1_vxvnk1.png"
          alt=""
        />
      </div>{" "}
    </div>
  );
}
