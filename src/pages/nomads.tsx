import { Field, Form } from "react-final-form";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { z } from "zod";
import { WaitingForm } from "../components/form";
import Me from "../components/me";

const url = process.env.NEXT_PUBLIC_MAILCHIMP_ACTION as string;

const validator = z.object({
  email: z.string().email(),
  name: z.string(),
});

export default function WaitingList() {
  return (
    <div className="bg-gray-100c grid w-full place-content-center justify-center sm:h-screen ">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div className=" w-full">
            <MailchimpForm
              error={status === "error" ? (message as string) : ""}
              submitting={status === "sending"}
              success={status === "success"}
              onSubmit={(formData) =>
                subscribe({
                  EMAIL: formData.email,
                  FNAME: formData.name,
                } as any)
              }
            />
          </div>
        )}
      />{" "}
    </div>
  );
}
interface MailchimpFormProps {
  onSubmit: (data: z.TypeOf<typeof validator>) => void;
  error: string;
  submitting: boolean;
  success: boolean;
}

const MailchimpForm = ({
  onSubmit,
  error,
  submitting,
  success,
}: MailchimpFormProps) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid }) => (
        <div className="grid   place-content-center content-center ">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-800 md:text-5xl ">
              Vuoi diventare un programmatore web? 👨🏻‍💻
            </h2>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-800 md:text-5xl ">
              Ti piacerebbe lavorare viaggiando? 🏝️
            </h2>
            <h2 className="inline text-3xl font-bold tracking-tight text-teal-600 sm:block md:text-5xl">
              Sei nel posto giusto!
            </h2>
            <div className="py-4">
              <p className=" pt-2 text-xl font-bold tracking-tight text-gray-600 sm:block sm:pt-4 sm:text-3xl">
                Sto creando un percorso{" "}
                <span className="font-bold  text-teal-600">personalizzato</span>{" "}
                per trasformarti in un
                <span className="font-bold  text-teal-600">
                  {" "}
                  programmatore nomade
                </span>
                .
              </p>
              <p className=" py-4 text-xl font-bold tracking-tight text-gray-600 sm:block sm:text-3xl">
                Iscriviti per sapere per primo cosa ti aspetta! 🚀🚀🚀
              </p>

              {success ? (
                <div>
                  {" "}
                  <h2 className="pt-4 text-2xl font-bold tracking-tight text-zinc-800 md:text-4xl ">
                    Grazie per esserti iscritto! Ci sentiamo presto 🚀
                  </h2>
                  <p className=" text-xl font-bold tracking-tight text-gray-600 sm:block sm:text-2xl">
                    (controlla la casella mail con le prime informazioni per te.
                    📮)
                  </p>
                </div>
              ) : (
                <WaitingForm
                  error={error}
                  invalid={invalid}
                  submitting={submitting}
                  success={success}
                  handleSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
        </div>
      )}
    />
  );
};
