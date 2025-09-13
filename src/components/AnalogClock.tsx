// src/components/AnalogClock.tsx
import { useEffect, useState } from "react";

// Props for the AnalogClock component
// - timezone: which timezone the clock should display
// - size: optional pixel size for the clock (default = 180px)
interface AnalogClockProps {
  timezone: string;
  size?: number; // px
}

// Functional component that renders an analog clock
export function AnalogClock({ timezone, size = 180 }: AnalogClockProps) {
  // Local state to store the current date/time
  const [date, setDate] = useState(new Date());

  // useEffect runs when the component mounts or when timezone changes
  useEffect(() => {
    // Create an interval that updates the time every second
    const id = setInterval(() => {
      // Generate a new Date object in the selected timezone
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: timezone })
      );
      setDate(now); // Update state with the new time
    }, 1000);

    // Cleanup: clear the interval when the component unmounts or timezone changes
    return () => clearInterval(id);
  }, [timezone]);

  // Extract hours, minutes, and seconds from the current date
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours();

  // Calculate rotation degrees for each hand
  const secondDeg = s * 6;                         // 360° / 60 seconds
  const minuteDeg = m * 6 + s * 0.1;               // 360° / 60 + smooth drift from seconds
  const hourDeg   = (h % 12) * 30 + m * 0.5;       // 360° / 12 + drift from minutes

  // Radius where tick marks should be placed (slightly inside the clock edge)
  const radius = size / 2 - 12;

  return (
    <div className="analog-clock" style={{ width: size, height: size }}>
      {/* 12 tick marks positioned around the clock face */}
      {[...Array(12)].map((_, i) => {
        const angle = i * 30; // Each tick is 30° apart
        const major = i % 3 === 0; // Highlight 12, 3, 6, and 9
        const height = major ? 16 : 10; // Bigger marks for major ticks
        return (
          <div
            key={i}
            className="tick"
            style={{
              height,
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
            }}
          />
        );
      })}

      {/* Clock hands */}
      <div className="hand hour"   style={{ transform: `rotate(${hourDeg}deg)` }} />
      <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }} />
      <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }} />

      {/* Center pivot (dot in the middle of the clock) */}
      <div className="pivot" />
    </div>
  );
}
