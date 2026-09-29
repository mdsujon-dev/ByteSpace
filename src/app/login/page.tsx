import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login | ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      heading="Sign in with ease"
      description="Experience a seamless and effortless process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthLayout>
  );
}
