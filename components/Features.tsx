"use client";

import { Flame, Calendar, BarChart3, Bell, Check } from "lucide-react";

const habits = [
  { name: "Morning meditation", color: "#D4B483", completed: true },
  { name: "Read 20 pages", color: "#4A90D9", completed: true },
  { name: "Exercise 30 min", color: "#E67E22", completed: false },
  { name: "Journal", color: "#9B59B6", completed: false },
];

const features = [
  {
    icon: Flame,
    title: "Streak tracking",
    description: "Watch your momentum build day by day. Never break the chain.",
  },
  {
    icon: Calendar,
    title: "Calendar heatmap",
    description: "See your consistency at a glance with a beautiful 30-day view.",
  },
  {
    icon: BarChart3,
    title: "Smart insights",
    description:
      "Current streak, longest streak, completion rate — all the stats that matter.",
  },
  {
    icon: Bell,
    title: "Gentle reminders",
    description:
      "Set custom reminder times so you never forget your daily rituals.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* App Mockup */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto lg:mx-0">
            {/* Window Controls */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
              <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
              <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
            </div>

            {/* Header */}
            <div className="mb-6">
              <p className="text-sm text-[#7D8CA4] mb-1">Good morning</p>
              <h3 className="text-xl font-semibold text-[#122C51]">
                Your daily ritual
              </h3>
              <p className="text-sm text-[#7D8CA4]">
                Tuesday, March 25 · 2 of 4 minted
              </p>
            </div>

            {/* Progress Circle */}
            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#D4B483"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${Math.PI * 80 * 0.5} ${Math.PI * 80}`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-[#122C51]">
                  50%
                </span>
              </div>
            </div>

            {/* Habit List */}
            <div className="space-y-3">
              {habits.map((habit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: habit.color }}
                    />
                    <span
                      className={`text-sm ${
                        habit.completed
                          ? "text-[#7D8CA4]"
                          : "text-[#122C51] font-medium"
                      }`}
                    >
                      {habit.name}
                    </span>
                  </div>
                  <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      habit.completed
                        ? "bg-[#D4B483] text-white"
                        : "border-2 border-[#D6D9DC] hover:border-[#D4B483]"
                    }`}
                  >
                    {habit.completed && <Check className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div>
            <p className="section-kicker reveal-body mb-4">Features</p>
            <h2 className="reveal-title text-4xl md:text-5xl font-semibold text-[#122C51] leading-tight mb-10">
              Everything you need,
              <br />
              nothing you don&apos;t
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="reveal-body bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#F4F5F7] rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-[#50617F]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#122C51] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#50617F] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
