import { Container } from "@/components/ui/Container";
import { AppImage } from "@/components/ui/AppImage";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/avatars/avatar-1.png",
    text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/avatars/avatar-2.png",
    text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/avatars/avatar-3.png",
    text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Mesh Gradient Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: 149,
            left: -442,
            width: 1137,
            height: 1137,
            background:
              "radial-gradient(circle, rgba(0,59,226,0.5) 0%, rgba(0,59,226,0.12) 35%, rgba(0,59,226,0.03) 65%, rgba(0,59,226,0) 100%)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: -138,
            left: 395,
            width: 672,
            height: 672,
            background:
              "radial-gradient(circle, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 35%, rgba(203,252,1,0.06) 65%, rgba(203,252,1,0) 100%)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: -241,
            left: 842,
            width: 1137,
            height: 1137,
            background:
              "radial-gradient(circle, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 35%, rgba(203,252,1,0.06) 65%, rgba(203,252,1,0) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-sm text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-[44px] lg:leading-[1.2] lg:tracking-[-0.01em]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-zinc-600 md:text-base md:leading-7">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl bg-white p-8"
            >
              <AppImage
                src={testimonial.avatar}
                alt={testimonial.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="mt-4">
                <h3 className="font-bold text-zinc-900">{testimonial.name}</h3>
                <p className="text-sm font-medium text-brand-blue">
                  {testimonial.role}
                </p>
              </div>
              <p className="mt-6 text-sm leading-6 text-zinc-600">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
