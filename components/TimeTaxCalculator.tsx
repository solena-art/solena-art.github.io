"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedNumberProps {
  value: number;
}

function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startValue = displayValue;
    const endValue = value;
    const difference = endValue - startValue;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 1500, 1); // 1.5 second animation

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(startValue + difference * easeOutQuart);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className="font-sans">
      ${displayValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}
    </span>
  );
}

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  formatValue?: (value: number) => string;
}

function Slider({ label, value, onChange, min, max, step = 1, formatValue }: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="font-sans text-text font-semibold text-sm">
          {label}
        </label>
        <span className="font-sans text-primary font-bold text-lg">
          {formatValue ? formatValue(value) : value.toLocaleString()}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, #005f73 0%, #005f73 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
        }}
      />
    </div>
  );
}

export default function TimeTaxCalculator() {
  const [staffCount, setStaffCount] = useState(5);
  const [avgSalary, setAvgSalary] = useState(150000);
  const [hoursWasted, setHoursWasted] = useState(10);

  // Calculation
  const hourlyRate = avgSalary / 2080;
  const annualWaste = hourlyRate * hoursWasted * 52 * staffCount;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Inputs */}
            <div className="space-y-8">
              <h2 className="font-serif text-primary text-3xl font-bold mb-6">
                Calculate Your Time Tax
              </h2>
              
              <Slider
                label="Number of Regulatory Affairs Staff"
                value={staffCount}
                onChange={setStaffCount}
                min={1}
                max={20}
                step={1}
              />

              <Slider
                label="Average Salary"
                value={avgSalary}
                onChange={setAvgSalary}
                min={80000}
                max={250000}
                step={5000}
                formatValue={(val) => `$${val.toLocaleString()}`}
              />

              <Slider
                label="Hours Wasted on Research per Week"
                value={hoursWasted}
                onChange={setHoursWasted}
                min={5}
                max={20}
                step={0.5}
              />
            </div>

            {/* Right Column - Results */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-text/60 text-sm uppercase tracking-wide mb-2">
                    Total Annual Waste
                  </p>
                  <motion.div
                    className="text-6xl lg:text-7xl font-bold text-alert font-sans"
                    key={annualWaste}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedNumber value={annualWaste} />
                  </motion.div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="font-sans text-text/70 text-base leading-relaxed italic">
                    This is the cost of the Regulatory Singularity. SOLENA eliminates this tax.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
