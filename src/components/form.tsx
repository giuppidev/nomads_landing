import { Field, Form } from "react-final-form";

interface WaitingFormProps {
  handleSubmit: () => void;
  submitting: boolean;
  invalid: boolean;
  success: boolean;
  error: string;
}

export const WaitingForm = ({
  handleSubmit,
  submitting,
  invalid,
  success,
  error,
}: WaitingFormProps) => {
  return (
    <form className="mt-2 flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:py-4">
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
        <div className="rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            disabled={invalid}
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <div className="flex items-center gap-4">
              <span>Iscrivimi alla waiting list</span>
              {submitting && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className=" h-5 w-5 animate-spin fill-gray-50 text-teal-600 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>
          </button>
        </div>
      </div>

      {error && (
        <div>
          Errore in fase di invio form, ti preghiamo di riprovare più tardi.
        </div>
      )}

      <div className="flex">
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="policy"
              aria-describedby="comments-description"
              name="policy"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            />
          </div>
        </div>
        <div className="ml-2 text-sm" aria-label="policy">
          <label htmlFor="policy">
            <span id="policy-description" className="text-gray-600">
              Autorizzo al trattamento dei dati personali. Dettagli sulla policy
              <a href="/privacy" target="_blank">
                {" "}
                qui
              </a>
              .
            </span>
          </label>
        </div>
      </div>
    </form>
  );
};
