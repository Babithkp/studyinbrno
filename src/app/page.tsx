import Image from "next/image";
import image from "../../public/backgroundHeroPage.jpg";
import Link from "next/link";
import icon1 from "../../public/city.svg";
import icon2 from "../../public/rocket-graph.svg";
import icon3 from "../../public/carnival.svg";
import icon4 from "../../public/flag-point.svg";
import cardBg from "../../public/backgroung-card.png";
import img1 from "../../public/universitiesLogo/bccc.png";
import img2 from "../../public/universitiesLogo/marylandpng.png";
import img3 from "../../public/universitiesLogo/universityOfBaltimorejpg.jpg";
import img4 from "../../public/universitiesLogo/coppin.svg";
import img5 from "../../public/universitiesLogo/morgan.png";
import img6 from "../../public/universitiesLogo/frostburg.png";
import counsellingIcon from "../../public/icon-counselling.png";
import coachingIcon from "../../public/coaching-vector.png";
import visaIcon from "../../public/icon-visa.png";
import financialIcon from "../../public/icon-financial.png";
import CardApply from "@/components/cards/CardApply";
import MarylandMap from "../../public/baltimore-map.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <Image
        src={image}
        alt="hero image"
        className="relative h-[130vh] w-full object-cover max-sm:h-[100vh]"
      />
      <section className="absolute top-[25%] flex w-[50%] flex-col items-center justify-center max-md:w-[80%]">
        <article className="my-10 text-white">
          <h1 className="bg-red-500 px-14 py-10 text-5xl font-semibold max-md:p-4 max-md:text-2xl">
            Study in Maryland - home to diverse and a vibrant student community
            in Maryland, United States.
          </h1>
          <p className="bg-blue-600 p-8 text-lg font-medium max-md:p-4 max-sm:text-base text-center">
            We make it possible for international students to study in Maryland
            through scholarships which provides them with free access to a
            world-class education and career opportunities in Maryland, USA.
          </p>
        </article>
        <div className="flex max-sm:flex-col">
          <button className="rounded-md bg-white px-9 py-3 font-semibold text-red-500">
            DISCOVER Maryland
          </button>
        </div>
      </section>
      <section className="flex w-[95%] flex-col items-center">
        <div className="flex w-[90%] flex-col items-center justify-center gap-3">
          <h2 className="my-8 text-5xl font-bold text-red-500 max-md:text-3xl">
            Study at one of our partner institutions
          </h2>
          <p className="px-5 text-center text-lg font-extralight">
            Each year we provide scholarship opportunities for more than 1000
            international students from worldwide to study a postgraduate
            or doctoral degree program at one of our partner universities.
          </p>
          <div className="my-10 flex w-full gap-5 text-center max-lg:flex-wrap max-sm:grid max-sm:grid-cols-2">
            <figure className="flex flex-col items-center justify-center max-sm:w-full">
              <Image
                src={img3}
                alt="college"
                className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
              />
              <p>The University of Maryland</p>
            </figure>
            <figure className="flex flex-col items-center justify-center max-sm:w-full">
              <Image
                src={img1}
                alt="college"
                className="max-md:w-26 max-md:h-26 h-40 w-80 object-contain"
              />
              <p>Maryland City Community College</p>
            </figure>
            <figure className="flex flex-col items-center justify-center max-sm:w-full">
              <Image
                src={img2}
                alt="college"
                className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
              />
              <p>University of Maryland, School Of Dentistry</p>
            </figure>
            <figure className="flex flex-col items-center justify-center max-sm:w-full">
              <Image
                src={img4}
                alt="college"
                className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
              />
              <p>Coppin State University</p>
            </figure>
            <figure className="flex flex-col items-center justify-center max-sm:w-full">
              <Image
                src={img5}
                alt="college"
                className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
              />
              <p>Morgan State University</p>
            </figure>
            <figure className="flex flex-col items-center justify-center max-sm:w-full">
              <Image
                src={img6}
                alt="college"
                className="max-md:w-26 max-md:h-26 h-40 w-40 object-cover"
              />
              <p>Frostburg State University</p>
            </figure>
          </div>
        </div>
        <div className="my-20 flex w-full flex-col flex-wrap items-center justify-center gap-3">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold uppercase text-red-500 underline">
              what we do
            </span>
            <h3 className="my-8 w-[80%] text-center text-3xl font-bold text-red-500 max-md:text-lg">
              Direct Entry To Our Prestigious Partner Universities
            </h3>
            <p className="text-center">
              Our mission is to make your dream of studying in
              the USA come true.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <CardApply
              image={coachingIcon}
              title="Scholarship Assistance"
              content="Free access to apply for Maryland state-funded scholarships on our application portal."
            />
            <CardApply
              image={counsellingIcon}
              title="University Placement"
              content="Submit your application directly to six of our partner universities using our application portal."
            />
            <CardApply
              image={visaIcon}
              title="Visa Counselling"
              content="Get professional  student visa counseling and guidance from professionals."
            />
            <CardApply
              image={financialIcon}
              title="Free Counseling"
              content="We guide you throughout the entire process of achieving your goals and dreams free of charge!"
            />
          </div>
        </div>
        <Link href="/" className="mb-10 text-lg font-medium underline">
          View Our Top Study Programs.
        </Link>
      </section>
      <section className="mt-5 flex justify-center">
        <div className="grid w-[85%] gap-5 max-md:w-[95%] md:grid-cols-3 md:grid-rows-2">
          <div className="col-start-1 row-span-2 flex items-center">
            <p className="my-8 text-center text-5xl font-bold text-red-500 max-md:text-2xl">
              Why choose us for your study abroad dreams?
            </p>
          </div>
          <div className="grid grid-cols-[2rem,1fr] items-center gap-3">
            <Image
              src={icon1}
              alt="city"
              className="col-span-1 justify-self-center"
            />
            <h3 className="my-5 text-3xl font-bold text-red-500 max-md:text-2xl">
              Free World-Class Education!
            </h3>
            <p className="col-start-2">
              Through our organization&apos;s partnership with leading public
              universities in Maryland, we offer international students the
              opportunity to pursue Masters and PhD degree programs with fully
              funded scholarships provided by the Maryland State
              Department of Education.
            </p>
            <Link
              href={"/"}
              className="col-start-2 text-lg font-medium text-red-500 underline"
            >
              MORE INFO
            </Link>
          </div>
          <div className="grid grid-cols-[2rem,1fr] items-center gap-3">
            <Image
              src={icon2}
              alt="city"
              className="col-span-1 justify-self-center"
            />
            <h3 className="my-5 text-3xl font-bold text-red-500 max-md:text-2xl">
              Streamlined Application Procedure.
            </h3>
            <p className="col-start-2">
              International students can use our seamless application portal to
              apply directly to our partner universities for masters and PhD
              programs at no cost!
            </p>
            <Link
              href={"/"}
              className="col-start-2 text-lg font-medium text-red-500 underline"
            >
              MORE INFO
            </Link>
          </div>

          <div className="grid grid-cols-[2rem,1fr] items-center gap-3">
            <Image
              src={icon4}
              alt="city"
              className="col-span-1 justify-self-center"
            />
            <h3 className="my-5 text-3xl font-bold text-red-500 max-md:text-2xl">
              Career & Professional networking Opportunities.
            </h3>
            <p className="col-start-2">
              The annual student data in Maryland shows that 72% of university
              graduates in Maryland find jobs within 6 months of graduation.
              International students can benefit from our international
              student alumni network.
            </p>
            <Link
              href={"/"}
              className="col-start-2 text-lg font-medium text-red-500 underline"
            >
              MORE INFO
            </Link>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-10">
        <h3 className="my-8 px-5 text-5xl font-bold text-red-500 max-md:text-3xl">
          Find out more about the universities
        </h3>
        <div className="my-10 flex w-[80%] flex-wrap justify-between gap-10 max-md:justify-center">
          <div className="relative flex flex-col items-center text-center">
            <h6 className="text-7xl font-semibold text-yellow-300">14</h6>
            <p className="absolute top-[30%] w-[300%] text-lg font-bold text-slate-600 max-md:top-[35%]">
              YEARS OF EXPERIENCE
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            <h6 className="text-7xl font-semibold text-yellow-300">18000+</h6>
            <p className="absolute top-[30%] text-lg font-bold text-slate-600 max-md:top-[35%]">
              Scholarships Awarded
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            <h6 className="text-7xl font-semibold text-yellow-300">99%</h6>
            <p className="absolute top-[30%] w-[180%] text-lg font-bold text-slate-600 max-md:top-[35%]">
              University Acceptance Rate
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            <h6 className="text-7xl font-semibold text-yellow-300">99%</h6>
            <p className="absolute top-[30%] w-[120%] text-lg font-bold text-slate-600 max-md:top-[35%]">
              Visa Success Rate
            </p>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-10 py-10">
        <div className="flex flex-wrap gap-5 max-md:w-[95%]">
          <div className="relative flex h-[28rem] w-[19rem] items-center justify-center max-md:h-[20rem] max-md:w-[100%]">
            <Image
              src={cardBg}
              alt="college background"
              className="absolute h-full w-full object-cover"
            />
            <h3 className="z-20 text-center text-4xl font-bold text-red-500 max-md:text-2xl">
              There is always someone you can ask
            </h3>
          </div>
          <div className="relative flex h-[28rem] w-[19rem] items-center justify-center bg-red-500 max-md:h-[20rem] max-md:w-[100%]">
            <Link
              href={"/"}
              className="text-center text-2xl font-bold text-white underline max-md:text-xl"
            >
              FAQ
            </Link>
          </div>
          <div className="relative flex h-[28rem] w-[19rem] items-center justify-center max-md:h-[20rem] max-md:w-[100%]">
            <Image
              src={MarylandMap}
              alt="college background"
              className="absolute h-full w-full object-cover"
            />
            <h3 className="z-20 text-center text-4xl font-bold text-red-500 max-md:text-2xl">
              Ambassadors
            </h3>
          </div>
          <div className="relative flex h-[28rem] w-[19rem] items-center justify-center bg-blue-500 max-md:h-[20rem] max-md:w-[100%]">
            <Link
              href={"/"}
              className="text-center text-2xl font-bold text-white underline max-md:text-xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
      <section className="h-[70vh]">
        <h3 className="pt-10 text-center text-5xl font-bold text-red-500 max-md:text-3xl">
          See for yourself!
        </h3>
        <p className="mt-10 text-center">Instagram: #StudyInMaryland</p>
      </section>
    </main>
  );
}
