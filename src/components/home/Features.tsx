import { Container } from "@/components/ui/Container";
import { FiCheckCircle } from "react-icons/fi";
import { CourseCard } from "@/components/courses/CourseCard";
import { sampleCourses } from "@/lib/sample-courses";
import { AppImage } from "@/components/ui/AppImage";
import { DecorShape } from "@/components/ui/DecorShape";

export function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-24 max-md:py-16">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: -466,
            left: -152,
            width: 1137,
            height: 1137,
            background:
              "radial-gradient(circle, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 35%, rgba(203,252,1,0.06) 65%, rgba(203,252,1,0) 100%)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: 946,
            left: -287,
            width: 672,
            height: 672,
            background:
              "radial-gradient(circle, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 35%, rgba(203,252,1,0.06) 65%, rgba(203,252,1,0) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-32 max-md:gap-16">
        {/* Feature 1: For Students. On phones (max-md:) each feature is minimal: text + photo, no floating widgets */}
        <div className="flex flex-col items-center gap-12 max-md:gap-8 md:flex-row md:justify-between">
          <div className="flex-1 md:pr-12">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Your Path to Professional<br />
              Growth Starts Here!
            </h2>
            <p className="mt-6 text-sm leading-6 text-zinc-600 md:text-base md:leading-7">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are seeking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-brand-blue">1.2K</p>
                <p className="text-sm font-medium text-zinc-500">Students</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-blue">70+</p>
                <p className="text-sm font-medium text-zinc-500">Courses</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-blue">18</p>
                <p className="text-sm font-medium text-zinc-500">Creators</p>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            {/* Background CourseCard */}
            <div className="absolute left-[90px] -top-[60px] w-[280px] scale-90 opacity-90 transition-transform hover:scale-100 z-0 pointer-events-none max-md:hidden sm:left-[50px]">
              <CourseCard course={sampleCourses[0]} />
            </div>
            
            {/* Image */}
            <div className="relative z-10 mx-auto max-w-2xl overflow-hidden max-md:max-w-xs">
              <AppImage 
                src="/home/male.png" 
                alt="Student" 
                width={700} 
                height={400}
                className="object-contain"
              />
            </div>
            {/* Spring shape (Squiggle) */}
            <DecorShape
              src="/auth/squiggle.png"
              tint="lime"
              className="absolute bottom-57.5 right-4 z-30 h-25 w-25 translate-x-3.75 translate-y-3.75 max-md:hidden sm:right-8"
            />
            
            {/* Floating widget: Learning Progress */}
            <div className="absolute bottom-[129px] right-2 z-20 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm max-md:hidden sm:right-4">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Learning Progress</p>
              <p className="mt-1 text-[40px] font-semibold leading-tight tracking-[-0.01em] text-zinc-900">55%</p>
              <div className="mt-2 h-2 w-36 rounded-full bg-zinc-100">
                <div className="h-full w-[55%] rounded-full bg-brand-lime" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: For Creators */}
        <div className="flex flex-col-reverse items-center gap-12 max-md:gap-8 md:flex-row md:justify-between">
          <div className="relative flex-1">
            {/* Image */}
            <div className="relative z-10 mx-auto max-w-lg overflow-hidden max-md:max-w-xs">
              <AppImage 
                src="/home/female.png" 
                alt="Creator" 
                width={450} 
                height={500}
                className="object-contain"
              />
            </div>
            
            {/* Floating widget 1: Total Revenue */}
            <div className="absolute top-[calc(5%+5px)] left-[10px] z-0 w-[240px] rounded-2xl bg-brand-blue p-5 max-md:hidden">
              <p className="text-[8px] font-medium text-white/70 uppercase tracking-wider">Total Revenue</p>
              <p className="text-[8px] text-white/50 mb-2">July 1-28</p>
              <p className="text-2xl font-bold text-white">$120.29</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/20">
                <div className="h-full w-[72%] rounded-full bg-brand-lime" />
              </div>
            </div>

            {/* Floating widget 2: Year to Date */}
            <div className="absolute top-[calc(44%-10px)] left-[10px] z-0 rounded-2xl bg-brand-blue p-4 max-md:hidden">
              <p className="text-[8px] font-medium text-white/70 uppercase tracking-wider">Year to Date</p>
              <p className="text-[8px] text-white/50 mb-2">2023</p>
              <p className="text-xl font-bold text-white">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full bg-brand-lime px-2 py-0.5 text-[8px] font-bold text-zinc-900">12$</span>
            </div>

            {/* Squiggle lime; below lg it would sit on the face, so it's hidden there */}
            <DecorShape
              src="/auth/squiggle.png"
              tint="lime"
              className="absolute top-[calc(35%-80px)] right-28 z-20 h-30 w-30 -scale-x-100 max-lg:hidden sm:right-30"
            />

            {/* Floating widget 3: Happy Students; below lg it drops past the photo's bottom edge to clear the Year to Date card */}
            <div className="absolute bottom-[calc(5%+67px)] right-[13px] z-20 rounded-2xl bg-white border border-zinc-100 p-4 max-md:hidden max-lg:-bottom-16 sm:-right-[3px]">
              <p className="text-sm font-bold text-zinc-900">Happy Students</p>
              <div className="mt-1 flex items-center gap-1">
                <span className="text-sm font-bold text-zinc-900">4.5</span>
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-xs text-zinc-500">(240)</span>
              </div>
              <div className="mt-3 flex -space-x-3">
                {["/avatars/avatar-1.png", "/avatars/avatar-2.png", "/avatars/avatar-3.png", "/avatars/avatar-4.png", "/avatars/avatar-1.png", "/avatars/avatar-2.png", "/avatars/avatar-3.png"].map((src, i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden shrink-0">
                    <AppImage src={src} alt="Student" width={40} height={40} className="object-cover h-full w-full" />
                  </div>
                ))}
                <div className="h-10 w-10 shrink-0 rounded-full bg-brand-lime border-2 border-white flex items-center justify-center text-[11px] font-bold text-zinc-900">2K+</div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:pl-12">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Create & Manage<br />
              Courses Easily.
            </h2>
            <p className="mt-6 text-sm leading-6 text-zinc-600 md:text-base md:leading-7">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Share Your Expertise",
                "Manage Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="h-5 w-5 text-brand-blue shrink-0" />
                  <span className="text-sm font-medium text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
