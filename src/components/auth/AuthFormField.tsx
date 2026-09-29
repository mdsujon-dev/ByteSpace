type AuthFormFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export function AuthFormField({
  label,
  name,
  type = "text",
  placeholder,
}: AuthFormFieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-zinc-700">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-blue focus:outline-none"
      />
    </label>
  );
}
