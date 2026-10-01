import Link from "next/link";
import { AuthFormField } from "@/components/auth/AuthFormField";

export function SignupForm() {
  return (
    <div>
      <span className="text-sm font-medium text-brand-blue">
        Create an Account
      </span>
      <h2 className="mt-1 text-3xl font-bold text-zinc-900">
        Welcome to ByteSpace
      </h2>

      <form className="mt-8 flex flex-col gap-5">
        <AuthFormField label="Full Name" name="fullName" placeholder="James Carla" />
        <AuthFormField
          label="Email"
          name="email"
          type="email"
          placeholder="yourname@example.com"
        />
        <AuthFormField label="Password" name="password" type="password" />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-brand-lime px-8 py-2.5 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-brand-blue">
          Login
        </Link>
      </p>
    </div>
  );
}
