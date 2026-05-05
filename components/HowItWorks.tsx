const steps = [
  {
    number: 1,
    title: "Create your habits",
    description:
      "Add the habits you want to build — daily, specific days, or a weekly goal.",
  },
  {
    number: 2,
    title: "Tap to complete",
    description: "One tap each day to log your progress. Quick, satisfying, done.",
  },
  {
    number: 3,
    title: "Watch your growth",
    description:
      "See streaks grow, heatmaps fill in, and your consistency compound over time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-kicker reveal-body mb-4">How it works</p>
          <h2 className="reveal-title text-4xl md:text-5xl font-semibold text-[#122C51]">
            Three steps to a better routine
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-[60%] h-0 border-t-2 border-dashed border-[#D6D9DC]" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="reveal-body text-center relative">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#36454F] text-white font-semibold text-lg rounded-xl mb-6 relative z-10">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#122C51] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#50617F] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
