import { FaFacebookF, FaGoogle } from "react-icons/fa";

export function SocialAuthButtons() {
  return (
    <div>
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-zinc-200" />
        <span className="text-xs text-zinc-400">or</span>
        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="flex justify-center gap-3">
        <button
          type="button"
          aria-label="Continue with Facebook"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:bg-zinc-50"
        >
          <FaFacebookF className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Continue with Google"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:bg-zinc-50"
        >
          <FaGoogle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
