import { Container } from "@/components/ui/Container";
import { FiAperture, FiCloudLightning, FiCommand, FiHexagon, FiSun } from "react-icons/fi";

const sponsors = [
  { name: "Logoipsum", icon: FiAperture },
  { name: "Logoipsum", icon: FiSun },
  { name: "Logoipsum", icon: FiCloudLightning },
  { name: "Logoipsum", icon: FiCommand },
  { name: "Logoipsum", icon: FiHexagon },
];

export function Sponsors() {
  return (
    <section className="bg-zinc-50 py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale sm:gap-12 md:gap-20">
          {sponsors.map((sponsor, index) => {
            const Icon = sponsor.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 text-zinc-600 transition-opacity hover:opacity-100"
              >
                <Icon className="h-6 w-6" />
                <span className="text-xl font-bold tracking-tight">
                  {sponsor.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
