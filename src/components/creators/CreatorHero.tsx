import { MdVerified } from "react-icons/md";
import { FiBox, FiUsers } from "react-icons/fi";
import { gridBackgroundStyle } from "@/lib/styles";
import { Container } from "@/components/ui/Container";
import { AppImage } from "@/components/ui/AppImage";

type CreatorHeroProps = {
  name: string;
  avatar: string;
  verified: boolean;
  role: string;
  bio: string;
  followers: number;
  productCount: number;
};

export function CreatorHero({
  name,
  avatar,
  verified,
  role,
  bio,
  followers,
  productCount,
}: CreatorHeroProps) {
  return (
    <section
      className="bg-brand-blue pt-28 pb-10 lg:pt-32"
      style={gridBackgroundStyle}
    >
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <AppImage
              src={avatar}
              alt={name}
              width={72}
              height={72}
              className="h-18 w-18 shrink-0 rounded-xl border-2 border-white/40 object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white sm:text-2xl">
                  {name}
                </h1>
                {verified && (
                  <span className="flex items-center rounded-full bg-brand-lime px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-zinc-900">
                    Creator
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-white/70">{role}</p>
            </div>
          </div>

          <div className="mt-4 max-w-4xl">
            <p className="text-sm leading-6 text-white/80 whitespace-pre-line">
              {bio}
            </p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700">
                {productCount} Products
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700">
                {followers} Followers
              </span>
            </div>

            <button
              type="button"
              className="shrink-0 rounded-full bg-brand-lime px-6 py-2 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
            >
              Follow
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
