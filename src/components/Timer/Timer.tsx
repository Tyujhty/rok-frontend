import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSecondes] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondes((prevSeconds: number): number => prevSeconds + 1);
    }, 1000);

    if (seconds === 60) {
      setSecondes(0);
      setMinutes((prevMinutes: number): number => prevMinutes + 1);
    }
    return () => clearInterval(timer);
  }, [seconds]);

  function formateTimer(time: number): string {
    // Format a number to have two digits, padding with zeros if necessary
    return time.toString().padStart(2, "0");
  }

  return (
    <div className="max-h-[50px] bg-light-gray10 p-2 rounded-md text-2xl font-semibold">
      {formateTimer(minutes)} : {formateTimer(seconds)}
    </div>
  );
}
