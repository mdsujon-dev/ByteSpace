import { Container } from "@/components/ui/Container";
import { FiCheckCircle } from "react-icons/fi";
import { CourseCard } from "@/components/courses/CourseCard";
import { sampleCourses } from "@/lib/sample-courses";
import { AppImage } from "@/components/ui/AppImage";

export function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center">
        <div className="absolute top-0 right-[10%] h-[500px] w-[500px] rounded-full bg-brand-lime/20 blur-[100px]" />
        <div className="absolute top-[40%] left-[5%] h-[600px] w-[600px] rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute bottom-0 right-[20%] h-[500px] w-[500px] rounded-full bg-brand-lime/20 blur-[100px]" />
      </div>

      <Container className="relative z-10 flex flex-col gap-32">
        {/* Feature 1: For Students */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
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
            <div className="absolute left-[90px] -top-[60px] w-[280px] scale-90 opacity-90 transition-transform hover:scale-100 z-0 pointer-events-none sm:left-[50px]">
              <CourseCard course={sampleCourses[0]} />
            </div>
            
            {/* Image */}
            <div className="relative z-10 mx-auto max-w-2xl overflow-hidden">
              <AppImage 
                src="/home/male.png" 
                alt="Student" 
                width={700} 
                height={400}
                className="object-contain"
              />
            </div>
            {/* Spring shape (Squiggle) */}
            <div className="absolute bottom-[230px] right-4 z-30 opacity-100 sm:right-8 translate-x-[15px] translate-y-[15px] w-[100px] h-[100px]">
              <div className="relative w-full h-full">
                <AppImage src="/auth/squiggle.png" alt="Decoration" fill className="object-contain" />
                <div 
                  className="absolute inset-0 bg-brand-lime mix-blend-multiply"
                  style={{
                    maskImage: 'url(/auth/squiggle.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: 'url(/auth/squiggle.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center'
                  }}
                />
              </div>
            </div>
            
            {/* Floating widget: Learning Progress */}
            <div className="absolute bottom-[129px] right-2 z-20 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm sm:right-4">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Learning Progress</p>
              <p className="mt-1 text-[40px] font-semibold leading-tight tracking-[-0.01em] text-zinc-900">55%</p>
              <div className="mt-2 h-2 w-36 rounded-full bg-zinc-100">
                <div className="h-full w-[55%] rounded-full bg-brand-lime" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: For Creators */}
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
          <div className="relative flex-1">
            {/* Image */}
            <div className="relative z-10 mx-auto max-w-lg overflow-hidden">
              <AppImage 
                src="/home/female.png" 
                alt="Creator" 
                width={450} 
                height={500}
                className="object-contain"
              />
            </div>
            
            {/* Floating widget 1: Total Revenue */}
            <div className="absolute top-[10%] left-0 z-20 rounded-2xl bg-brand-blue p-5 sm:-left-6">
              <p className="text-[10px] font-medium text-white/70 uppercase tracking-wider">Total Revenue</p>
              <p className="text-[10px] text-white/50 mb-2">July 1-28</p>
              <p className="text-3xl font-bold text-white">$120.29</p>
              <div className="mt-3 h-1.5 w-40 rounded-full bg-white/20">
                <div className="h-full w-[72%] rounded-full bg-brand-lime" />
              </div>
            </div>

            {/* Floating widget 2: Year to Date */}
            <div className="absolute top-[44%] left-0 z-20 rounded-2xl bg-brand-blue p-4 sm:-left-6">
              <p className="text-[10px] font-medium text-white/70 uppercase tracking-wider">Year to Date</p>
              <p className="text-[10px] text-white/50 mb-2">2023</p>
              <p className="text-2xl font-bold text-white">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full bg-brand-lime px-2 py-0.5 text-[10px] font-bold text-zinc-900">12$</span>
            </div>

            {/* Squiggle lime */}
            <div className="absolute top-[15%] right-4 z-20 w-[90px] h-[90px] sm:right-6">
              <div className="relative w-full h-full">
                <AppImage src="/auth/squiggle.png" alt="Decoration" fill className="object-contain" />
                <div 
                  className="absolute inset-0 bg-brand-lime mix-blend-multiply"
                  style={{
                    maskImage: 'url(/auth/squiggle.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: 'url(/auth/squiggle.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center'
                  }}
                />
              </div>
            </div>

            {/* Floating widget 3: Happy Students */}
            <div className="absolute bottom-[calc(5%+67px)] right-[13px] z-20 rounded-2xl bg-white border border-zinc-100 p-4 sm:-right-[3px]">
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
