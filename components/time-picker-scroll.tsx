"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimePickerScrollProps {
  value: string;
  onChange: (time: string) => void;
}

export default function TimePickerScroll({ value, onChange }: TimePickerScrollProps) {
  const [mounted, setMounted] = useState(false);
  const [hours, setHours] = useState(7);
  const [minutes, setMinutes] = useState(0);
  const [period, setPeriod] = useState<"AM" | "PM">("AM");

  const hoursRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parse initial value only once
  useEffect(() => {
    if (value && mounted) {
      const [h, m] = value.split(":").map(Number);
      const h12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
      const newPeriod = h >= 12 ? "PM" : "AM";
      
      // Only update if values are different to prevent loops
      if (hours !== h12 || minutes !== m || period !== newPeriod) {
        setHours(h12);
        setMinutes(m);
        setPeriod(newPeriod);
      }
    }
  }, [value, mounted]);

  // Update parent when time changes
  useEffect(() => {
    if (!mounted) return;
    
    let h24 = hours;
    if (period === "PM" && hours !== 12) h24 = hours + 12;
    if (period === "AM" && hours === 12) h24 = 0;
    
    const timeString = `${h24.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    if (timeString !== value) {
      onChange(timeString);
    }
  }, [hours, minutes, period, mounted]);

  const handleWheel = (
    e: React.WheelEvent<HTMLDivElement>,
    setter: (val: number) => void,
    current: number,
    max: number,
    min: number = 0
  ) => {
    e.preventDefault();
    
    if (e.deltaY > 0) {
      // Scroll down - increase value
      setter(current < max ? current + 1 : min);
    } else {
      // Scroll up - decrease value
      setter(current > min ? current - 1 : max);
    }
  };

  const handleMouseDrag = (
    e: React.MouseEvent<HTMLDivElement>,
    setter: (val: number) => void,
    current: number,
    max: number,
    min: number
  ) => {
    e.preventDefault();
    const startY = e.clientY;
    const startValue = current;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = startY - moveEvent.clientY;
      const sensitivity = 50; // pixels to move for one step (zwiększone z 20 na 50)
      const steps = Math.floor(deltaY / sensitivity);

      if (steps !== 0) {
        let newValue = startValue + steps;

        // Handle wrapping
        while (newValue > max) newValue = min + (newValue - max - 1);
        while (newValue < min) newValue = max - (min - newValue - 1);

        setter(newValue);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
    };

    document.body.style.cursor = "ns-resize";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchDrag = (
    e: React.TouchEvent<HTMLDivElement>,
    setter: (val: number) => void,
    current: number,
    max: number,
    min: number
  ) => {
    const startY = e.touches[0].clientY;
    const startValue = current;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      moveEvent.preventDefault();
      const deltaY = startY - moveEvent.touches[0].clientY;
      const sensitivity = 50;
      const steps = Math.floor(deltaY / sensitivity);

      if (steps !== 0) {
        let newValue = startValue + steps;

        // Handle wrapping
        while (newValue > max) newValue = min + (newValue - max - 1);
        while (newValue < min) newValue = max - (min - newValue - 1);

        setter(newValue);
      }
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  // Sync visual scroll position with state
  useEffect(() => {
    if (hoursRef.current) {
      const itemHeight = 56;
      hoursRef.current.scrollTo({
        top: (hours - 1) * itemHeight,
        behavior: "smooth",
      });
    }
  }, [hours]);

  useEffect(() => {
    if (minutesRef.current) {
      const itemHeight = 56;
      minutesRef.current.scrollTo({
        top: minutes * itemHeight,
        behavior: "smooth",
      });
    }
  }, [minutes]);

  const renderNumbers = (max: number, current: number) => {
    const numbers = [];
    for (let i = 0; i < max; i++) {
      const displayNum = max === 12 ? i + 1 : i;
      const isSelected = i === current;
      numbers.push(
        <div
          key={i}
          className={`h-14 flex items-center justify-center text-2xl sm:text-3xl font-semibold transition-all duration-150 snap-center ${
            isSelected
              ? "scale-125 text-foreground"
              : "scale-75 text-muted-foreground/40"
          }`}
          style={{ scrollSnapAlign: "center" }}
        >
          {displayNum.toString().padStart(2, "0")}
        </div>
      );
    }
    return numbers;
  };

  useEffect(() => {
    // Initialize scroll positions
    if (mounted && hoursRef.current) {
      hoursRef.current.scrollTop = (hours - 1) * 56;
    }
    if (mounted && minutesRef.current) {
      minutesRef.current.scrollTop = minutes * 56;
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <Card className="p-4 sm:p-6">
        <div className="flex items-center justify-center gap-4 sm:gap-6 h-[168px]">
          <div className="text-muted-foreground text-sm">Loading...</div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {/* Hours */}
        <div className="relative">
          <div
            ref={hoursRef}
            onMouseDown={(e) => handleMouseDrag(e, setHours, hours, 12, 1)}
            onTouchStart={(e) => handleTouchDrag(e, setHours, hours, 12, 1)}
            onWheel={(e) => handleWheel(e, setHours, hours, 12, 1)}
            className="h-[168px] w-20 sm:w-24 overflow-hidden relative select-none cursor-ns-resize touch-none"
          >
            <div className="h-14" /> {/* Top padding */}
            {renderNumbers(12, hours - 1)}
            <div className="h-14" /> {/* Bottom padding */}
          </div>
          <div className="absolute top-14 left-0 right-0 h-14 border-y-2 border-primary/20 pointer-events-none rounded-md" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent via-50% to-background" />
        </div>

        <span className="text-3xl sm:text-4xl font-bold text-muted-foreground">:</span>

        {/* Minutes */}
        <div className="relative">
          <div
            ref={minutesRef}
            onMouseDown={(e) => handleMouseDrag(e, setMinutes, minutes, 59, 0)}
            onTouchStart={(e) => handleTouchDrag(e, setMinutes, minutes, 59, 0)}
            onWheel={(e) => handleWheel(e, setMinutes, minutes, 59)}
            className="h-[168px] w-20 sm:w-24 overflow-hidden relative select-none cursor-ns-resize touch-none"
          >
            <div className="h-14" /> {/* Top padding */}
            {renderNumbers(60, minutes)}
            <div className="h-14" /> {/* Bottom padding */}
          </div>
          <div className="absolute top-14 left-0 right-0 h-14 border-y-2 border-primary/20 pointer-events-none rounded-md" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent via-50% to-background" />
        </div>

        {/* AM/PM Toggle */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setPeriod("AM")}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all active:scale-95 ${
              period === "AM"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            AM
          </button>
          <button
            onClick={() => setPeriod("PM")}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all active:scale-95 ${
              period === "PM"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            PM
          </button>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .snap-y {
          scroll-snap-type: y mandatory;
        }
        .snap-mandatory > div {
          scroll-snap-align: center;
          scroll-snap-stop: always;
        }
      `}</style>
    </Card>
  );
}
