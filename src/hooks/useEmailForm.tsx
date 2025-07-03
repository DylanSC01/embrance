import { validateEmail } from "@/lib/utils";
import { useState } from "react";

interface UseEmailFormReturn {
  email: string;
  setEmail: (email: string) => void;
  error: string;
  success: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
}

export const useEmailForm = (
  onSubmit: (email: string) => void
): UseEmailFormReturn => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }

    setIsLoading(true);

    try {
      await onSubmit(email);
      setSuccess("Thanks for checking out my project! 🎉");
      setEmail("");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    success,
    error,
    handleSubmit,
    isLoading,
  };
};
