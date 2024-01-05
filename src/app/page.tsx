import SectionLogo from "./index-sections/section-01-logo";
import SectionFeatures from "./index-sections/section-02-features";
import SectionElements from "./index-sections/section-03-elements";
import SectionSpecification from "./index-sections/section-04-specification";

export default function MainPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-sky-100">
      <SectionLogo />
      <SectionFeatures />
      <SectionElements />
      <SectionSpecification />
    </main>
  );
}
