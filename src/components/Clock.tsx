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

}
