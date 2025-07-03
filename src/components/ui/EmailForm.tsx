import { useEmailForm } from "@/hooks";
import { subscribeAction } from "@/actions/subscribe.action";

interface EmailForm {
  wrapperClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  placeholder?: string;
}

export const EmailForm = ({
  wrapperClassName = "flex flex-col sm:flex-row gap-3 items-stretch sm:items-center",
  inputClassName = "w-full",
  buttonClassName = "btn",
  placeholder = "Enter your email",
}: EmailForm) => {
  const { email, setEmail, error, handleSubmit, isLoading, success } =
    useEmailForm(subscribeAction);


  return (
    <div className="flex flex-col-reverse lg:flex-col gap-4">
      <form onSubmit={handleSubmit} className={wrapperClassName}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`${inputClassName}`}
          placeholder={placeholder}
        />
        <button type="submit" className={buttonClassName} disabled={isLoading}>
          {isLoading ? "Sending..." : "Let's Talk"}
        </button>
      </form>
      {error && <p className="text-red-600 text-lg px-4">{error}</p>}
      {success && <p className="text-green-600 text-lg px-4">{success}</p>}
    </div>
  );
};
