interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[0.25em] ${
          light ? "text-[#E5C786]" : "text-[#A27C3D]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#142B46]"
        }`}
      >
        {title}
      </h2>

      <div
        className={`my-6 h-[2px] w-14 ${
          centered ? "mx-auto" : ""
        } ${light ? "bg-[#E5C786]" : "bg-[#B38A49]"}`}
      />

      {description && (
        <p
          className={`text-sm leading-7 sm:text-base sm:leading-8 ${
            light ? "text-white/65" : "text-[#647184]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}