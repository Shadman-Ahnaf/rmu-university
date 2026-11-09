
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Images } from "lucide-react";

import {
  medicineDepartment,
} from "../../data/departments/medicineData";

import type {
  DepartmentTab,
} from "../../data/departments/medicineData";

import {
  DepartmentHero,
  DepartmentNoticeTicker,
  DepartmentNavigation,
  DepartmentHead,
  DepartmentAtGlance,
  DepartmentContact,
} from "../../components/department/DepartmentComponents";

import DepartmentResearch from "../../components/department/DepartmentResearch";
import DepartmentNotices from "../../components/department/DepartmentNotices";

import { medicineResearch } from "../../data/departments/researchData";
import { medicineNotices } from "../../data/departments/noticeData";

export default function MedicineOverview() {
  const [activeTab, setActiveTab] =
    useState<DepartmentTab>("Overview");

  return (
    <main className="min-h-screen bg-white">
      <DepartmentHero
        title={medicineDepartment.name}
        subtitle={medicineDepartment.subtitle}
        images={medicineDepartment.heroImages}
      />

      <DepartmentNoticeTicker notices={medicineDepartment.notices} />

      <DepartmentNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <AnimatePresence mode="wait">
        {activeTab === "Overview" ? (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <section className="bg-white py-14 sm:py-20">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <DepartmentHead head={medicineDepartment.head} />
              </div>
            </section>

            <DepartmentAtGlance
              items={medicineDepartment.atGlance}
            />

            <DepartmentContact
              contact={medicineDepartment.contact}
            />
          </motion.div>
        ) : activeTab === "Research" ? (
          <motion.div
            key="research"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <DepartmentResearch
              researches={medicineResearch}
            />
          </motion.div>
        ) : activeTab === "Notices" ? (
          <motion.div
            key="notices"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <DepartmentNotices
              notices={medicineNotices}
            />
          </motion.div>
        ) : (
          <motion.section
            key="gallery"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex min-h-[430px] items-center justify-center bg-[#F7F8FA] px-5 py-20"
          >
            <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#D5B46A]/50 bg-[#F8F4EB] text-[#A27C3D]">
                <Images size={27} strokeWidth={1.5} />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-[#142B46] sm:text-3xl">
                Department Gallery
              </h2>

              <div className="mx-auto mt-7 h-[2px] w-12 bg-[#D5B46A]" />

              <p className="mt-5 text-[10px] font-medium uppercase tracking-widest text-[#9AA4B0]">
                Content will be added in a future update
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
