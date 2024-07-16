interface ErrorMessageProps {
  touched: boolean | undefined;
  error: string | undefined;
}

export default function ErrorMessage(errorMessagePropos: ErrorMessageProps) {
  const { touched, error } = errorMessagePropos;

  if (!touched || !error) return null;
  return (
    <>
      <small className="text-red-700">{error}</small>
    </>
  );
}
