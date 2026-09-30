import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up | ByteSpace",
  description: "Create your ByteSpace account.",
};

export default function SignupPage() {
  return (
    <AuthLayout
      heading="Sign up and come in"
      description="The registration process is straightforward and uncomplicated, allowing users to sign up quickly, easily, and for free."
    >
      <SignupForm />
    </AuthLayout>
  );
}
