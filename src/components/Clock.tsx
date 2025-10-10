import { useEffect, useState } from "react";

// Props for the Clock component
// - timezone: the timezone to display
// - type: optional, can be "digital" or "analog" (default is "digital")
interface ClockProps {
  timezone: string;
  type?: "digital"  | "analog"; // choose display type
}

// Functional component that displays a clock in either digital or analog format
export function Clock({ timezone, type = "digital" }: ClockProps) {
  // Local state to store the digital time as a string
  const [time, setTime] = useState<string>("");

  // useEffect runs whenever the timezone changes
  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      try {
        // Format the current time according to the given timezone
        const now = new Date().toLocaleTimeString("sv-SE", {
          timeZone: timezone,
          hour12: false, // 24-hour format
        });
        setTime(now); // Save formatted time into state
      } catch (err) {
        // If the timezone is invalid, log an error and set fallback text
        console.error("❌ Invalid timezone:", timezone, err);
        setTime("Invalid timezone");
      }
    };

    // Run once immediately so the clock doesn’t start empty
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup: clear interval when component unmounts or timezone changes
    return () => clearInterval(interval);
  }, [timezone]);

  // If digital mode is selected, render a simple text-based clock
  if (type === "digital") {
    return <p className="clock">{time}</p>;
  }

  // Analog clock rendering
  // Get current date and adjust to the given timezone
  const date = new Date();
  try {
    const localDate = new Date(
      date.toLocaleString("en-US", { timeZone: timezone })
    );

    // Extract time parts
    const seconds = localDate.getSeconds();
    const minutes = localDate.getMinutes();
    const hours = localDate.getHours();

    // Calculate degrees for clock hands
    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

    // Render a simple analog clock with hour, minute, and second hands
    return (
      <div className="analog-clock">
        <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
        <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }} />
        <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }} />
      </div>
    );
  } catch (err) {
    // Fallback for invalid timezones in analog mode
    console.error("❌ Invalid timezone in analog mode:", timezone, err);
    return <p>Invalid timezone</p>;
  }
}

