
import { ArrowUpRight } from "lucide-react";
import { annualPerformanceData } from "../data/annualPerformanceData";
import "./AnnualPerformanceSection.css";

const AnnualPerformanceSection = () => {
  return (
    <section className="apa-section" id="annual-performance">
      <div className="apa-container">

        {/* Section Heading */}
        <div className="apa-heading">
          <span className="apa-eyebrow">
            GOVERNANCE & ACCOUNTABILITY
          </span>

          <h2>Annual Performance Agreement</h2>
        </div>

        {/* Performance Cards */}
        <div className="apa-grid">
          {annualPerformanceData.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                href={item.href}
                className="apa-card"
                key={item.id}
                aria-label={`${item.title} - ${item.linkLabel}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="apa-card-top">
                  <div className="apa-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <span className="apa-card-number">
                    {String(item.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="apa-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="apa-card-link">
                  <span>{item.linkLabel}</span>
                  <ArrowUpRight size={17} />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AnnualPerformanceSection;
