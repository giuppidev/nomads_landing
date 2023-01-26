export default function Me() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-12 lg:px-8 lg:py-16">
        <div className="relative lg:flex lg:items-center">
          <div className="lg:flex-shrink-0">
            <img
              className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
              src="https://res.cloudinary.com/de30mupo1/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1674753936/Progetto_senza_titolo_1_vxvnk1.png"
              alt=""
            />
          </div>

          <div className="relative lg:ml-10">
            <svg
              className="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-gray-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote className="relative">
              <div className="text-2xl font-medium leading-9 text-gray-900">
                <p>
                  Mi chiamo Giuseppe, per gli amici <strong>Giuppi</strong>,
                  sono un programmatore WEB da più di 10 anni e da 5{" "}
                  <strong>lavoro viaggiando</strong> per il mondo.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
