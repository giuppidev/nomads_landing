import { trpc } from "../utils/trpc";
import { Form, Field } from "react-final-form";
import { z } from "zod";
import { useRef, useState } from "react";

export default function WaitingList() {
  const createLead = trpc.lead.createLead.useMutation();
  const checkbox = useRef<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const lead = z.object({
    email: z.string().email(),
    name: z.string(),
  });

  const onSubmit = async (data: z.TypeOf<typeof lead>, form: any) => {
    const lead = await createLead.mutate({
      name: data.name,
      email: data.email,
    });
    form && form.restart && form.restart();
    setSubmitted(true);
    checkbox.current ? (checkbox.current.checked = false) : "";
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid, submitting }) => (
        <div className="grid h-screen place-content-center content-center bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="inline text-3xl font-bold tracking-tight text-gray-800 sm:block sm:text-4xl">
              Vuoi diventare un programmatore web? 👨🏻‍💻
            </h2>
            <h2 className="inline text-3xl font-bold tracking-tight text-gray-800 sm:block sm:text-4xl">
              Ti piacerebbe lavorare viaggiando? 🏝️
            </h2>
            <h2 className="inline text-3xl font-bold tracking-tight text-teal-600 sm:block sm:text-4xl">
              Sei nel posto giusto!
            </h2>
            <p className="inline pt-4 text-xl font-bold tracking-tight text-gray-700 sm:block sm:text-xl">
              Iscriviti per sapere per primo cosa bolle in pentola, diventare un
              <span className="text-teal-600 "> nomade digitale</span> sarà una
              passeggiata! 🚀
            </p>
            <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <Field
                    component="input"
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500 sm:max-w-xl"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <Field
                    component="input"
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500 sm:max-w-xl"
                    placeholder="La tua email"
                  />
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  {submitting ? (
                    <button
                      disabled={true}
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      ...
                    </button>
                  ) : (
                    <button
                      disabled={invalid}
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      Iscrivimi
                    </button>
                  )}
                </div>
              </div>
              <div>
                {submitted && (
                  <div>Grazie per esserti iscritto! Ci sentiamo presto ✌️</div>
                )}
              </div>
              <div className="flex">
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="policy"
                      aria-describedby="comments-description"
                      name="policy"
                      type="checkbox"
                      required
                      ref={checkbox}
                      className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                  </div>
                </div>
                <div className="ml-2 text-sm">
                  <span id="policy-description" className="text-gray-600">
                    Autorizzo al trattamento dei dati personali. Dettagli sulla
                    policy
                    <a href="/privacy" target="_blank">
                      {" "}
                      qui
                    </a>
                    .
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    />
  );
}
