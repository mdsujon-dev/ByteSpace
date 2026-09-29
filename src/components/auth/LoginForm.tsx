import Link from "next/link";
import { AuthFormField } from "@/components/auth/AuthFormField";
import { SocialAuthButtons } from "@/components/auth/SocialAuthButtons";

export function LoginForm() {
  return (
    <div>
      <span className="text-sm font-medium text-brand-blue">Sign In</span>
      <h2 className="mt-1 text-3xl font-bold text-zinc-900">Welcome Back</h2>

      <form className="mt-8 flex flex-col gap-5">
        <AuthFormField
          label="Email"
          name="email"
          type="email"
          placeholder="designer@example.com"
        />
        <AuthFormField label="Password" name="password" type="password" />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-brand-lime px-8 py-2.5 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
          >
            Sign In
          </button>
        </div>
      </form>

      <SocialAuthButtons />

      <p className="mt-6 text-center text-sm text-zinc-500">
        New user?{" "}
        <Link href="/signup" className="font-medium text-brand-blue">
          Create an account
        </Link>
      </p>
    </div>
  );
}
