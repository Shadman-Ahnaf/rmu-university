
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Share2,
  Check,
  GraduationCap,
  UserRound,
} from "lucide-react";

import { facultyMembers } from "../data/facultyData";

type ProfileTab = "about" | "education" | "contact";

export default function FacultyProfilePage() {
  const { id } = useParams<{ id: string }>();
  const faculty = facultyMembers.find(
    (member) => member.id === Number(id)
  );

  const [activeTab, setActiveTab] = useState<ProfileTab>("about");
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const profileUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${faculty?.name} | Rajshahi Medical University`,
          text: `Faculty profile of ${faculty?.name}`,
          url: profileUrl,
        });
      } else {
        await navigator.clipboard.writeText(profileUrl);
        setCopied(true);
      }
    } catch (error) {
      // Ignore sharing cancellation by the user.
      if (error instanceof Error && error.name !== "AbortError") {
        try {
          await navigator.clipboard.writeText(profileUrl);
          setCopied(true);
        } catch {
          setCopied(false);
        }
      }
    }
  };

  if (!faculty) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F7FA] px-5 pt-24 text-center">
        <h1 className="font-serif text-3xl font-semibold text-[#142B46]">
          Faculty profile not found
        </h1>

        <p className="mt-3 text-sm text-[#718096]">
          The requested faculty profile may not exist.
        </p>

        <Link
          to="/faculty"
          className="mt-6 inline-flex items-center gap-2 bg-[#142B46] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A27C3D]"
        >
          <ArrowLeft size={16} />
          Back to Faculty Directory
        </Link>
      </main>
    );
  }

  const tabs: {
    id: ProfileTab;
    label: string;
    icon: typeof UserRound;
  }[] = [
    { id: "about", label: "About", icon: UserRound },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-16 pt-[82px] sm:pt-[100px]">

      {/* Profile Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0B2036] via-[#173B5D] to-[#245477] px-5 py-12 text-center sm:py-16 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#D5B46A]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E5C786] sm:text-xs">
            Rajshahi Medical University
          </p>

          <h1 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Faculty Profile
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-white/75 sm:text-sm">
            Academic expertise, professional background and contact
            information.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-7 lg:px-10">

        {/* Back to Directory */}
        <div className="py-6">
          <Link
            to="/faculty"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#65758A] transition-colors hover:text-[#A27C3D]"
          >
            <ArrowLeft size={15} />
            Back to Faculty Directory
          </Link>
        </div>

        {/* Profile Introduction */}
        <section className="border border-[#E2E7ED] bg-white p-5 shadow-[0_3px_14px_rgba(20,43,70,0.04)] sm:p-7 md:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">

            {/* Faculty Portrait */}
            <div className="h-48 w-40 shrink-0 self-center overflow-hidden bg-[#E8EDF2] sm:h-52 sm:w-44 sm:self-auto md:h-56 md:w-48">
              <img
                src={faculty.image}
                alt={`Portrait of ${faculty.name}`}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Faculty Information */}
            <div className="flex min-w-0 flex-1 flex-col items-center text-center sm:items-start sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A27C3D] sm:text-xs">
                {faculty.department}
              </span>

              <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-[#142B46] sm:text-3xl">
                {faculty.name}
              </h2>

              <p className="mt-2 text-sm font-semibold text-[#65758A]">
                {faculty.designation}
              </p>

              <p className="mt-2 text-xs leading-6 text-[#8995A4] sm:text-sm">
                {faculty.degree}
              </p>

              {/* Share Profile */}
              <button
                type="button"
                onClick={handleShare}
                className="mt-6 inline-flex items-center justify-center gap-2 border border-[#142B46] px-5 py-2.5 text-xs font-semibold text-[#142B46] transition-colors hover:border-[#A27C3D] hover:bg-[#A27C3D] hover:text-white"
              >
                {copied ? <Check size={15} /> : <Share2 size={15} />}
                {copied ? "Link Copied" : "Share Profile"}
              </button>
            </div>
          </div>
        </section>

        {/* Profile Navigation */}
        <nav
          aria-label="Faculty profile sections"
          className="mt-6 flex flex-wrap items-center gap-2 border border-[#E2E7ED] bg-white p-2 shadow-[0_3px_14px_rgba(20,43,70,0.04)]"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setCopied(false);
                }}
                aria-pressed={isActive}
                className={`inline-flex min-h-10 items-center gap-2 px-4 py-2 text-xs font-semibold transition-colors sm:px-6 ${
                  isActive
                    ? "bg-[#142B46] text-white"
                    : "text-[#64748B] hover:bg-[#F5F7FA] hover:text-[#A27C3D]"
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Profile Content */}
        <section className="mt-5 min-h-[260px] border border-[#E2E7ED] bg-white px-5 py-7 shadow-[0_3px_14px_rgba(20,43,70,0.04)] sm:px-8 sm:py-9">

          {/* About */}
          {activeTab === "about" && (
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#142B46] sm:text-2xl">
                About
              </h3>

              <div className="mt-3 h-[2px] w-10 bg-[#B38A49]" />

              <p className="mt-6 max-w-4xl whitespace-pre-line text-sm leading-7 text-[#596779]">
                {faculty.about ||
                  `A detailed professional biography for ${faculty.name} will be published here. This section will provide information about academic experience, professional contributions and areas of expertise.`}
              </p>
            </div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#142B46] sm:text-2xl">
                Education & Qualifications
              </h3>

              <div className="mt-3 h-[2px] w-10 bg-[#B38A49]" />

              <div className="mt-7 space-y-3">
                {(faculty.education?.length
                  ? faculty.education
                  : [faculty.degree]
                ).map((qualification, index) => (
                  <div
                    key={`${qualification}-${index}`}
                    className="flex items-start gap-4 border border-[#E8ECF1] bg-[#FAFBFC] p-4 sm:p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#142B46]/[0.06] text-[#A27C3D]">
                      <GraduationCap size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-6 text-[#263D56]">
                        {qualification}
                      </p>

                      <p className="mt-1 text-xs text-[#8995A4]">
                        Academic qualification
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          {activeTab === "contact" && (
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#142B46] sm:text-2xl">
                Contact Information
              </h3>

              <div className="mt-3 h-[2px] w-10 bg-[#B38A49]" />

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {faculty.email && (
                  <div className="flex items-start gap-4 border border-[#E8ECF1] p-4">
                    <Mail className="mt-1 shrink-0 text-[#A27C3D]" size={19} />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#142B46]">
                        Email
                      </p>
                      <a
                        href={`mailto:${faculty.email}`}
                        className="mt-1 block break-all text-sm text-[#64748B] hover:text-[#A27C3D]"
                      >
                        {faculty.email}
                      </a>
                    </div>
                  </div>
                )}

                {faculty.phone && (
                  <div className="flex items-start gap-4 border border-[#E8ECF1] p-4">
                    <Phone className="mt-1 shrink-0 text-[#A27C3D]" size={19} />
                    <div>
                      <p className="text-xs font-semibold text-[#142B46]">
                        Phone
                      </p>
                      <a
                        href={`tel:${faculty.phone}`}
                        className="mt-1 block text-sm text-[#64748B] hover:text-[#A27C3D]"
                      >
                        {faculty.phone}
                      </a>
                    </div>
                  </div>
                )}

                {faculty.office && (
                  <div className="flex items-start gap-4 border border-[#E8ECF1] p-4 sm:col-span-2">
                    <MapPin className="mt-1 shrink-0 text-[#A27C3D]" size={19} />
                    <div>
                      <p className="text-xs font-semibold text-[#142B46]">
                        Office
                      </p>
                      <p className="mt-1 text-sm text-[#64748B]">
                        {faculty.office}
                      </p>
                    </div>
                  </div>
                )}

                {!faculty.email && !faculty.phone && !faculty.office && (
                  <div className="border border-dashed border-[#DCE3EB] bg-[#FAFBFC] px-5 py-8 text-center sm:col-span-2">
                    <Mail
                      size={24}
                      className="mx-auto text-[#A27C3D]"
                    />
                    <p className="mt-3 text-sm font-semibold text-[#263D56]">
                      Contact details are not available yet
                    </p>
                    <p className="mt-2 text-xs leading-6 text-[#8995A4]">
                      Official email, telephone and office information
                      will be published here when available.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Demo content note */}
        <p className="mt-8 text-center text-[10px] leading-5 text-[#9AA4B0]">
          Faculty profiles and photographs are demonstration content.
          Official information will be updated by the university.
        </p>
      </div>
    </main>
  );
}
