"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Moon, Zap, Sparkles } from "lucide-react";
import TimePickerScroll from "@/components/time-picker-scroll";

export default function SleepCalculator() {
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("when-to-sleep");

  // Update document title when results change
  useEffect(() => {
    if (results.length > 0) {
      const firstTime = results[0].replace("Power Nap: ", "").replace("Full Cycle: ", "");
      
      if (activeTab === "when-to-sleep") {
        document.title = `😴 Go to sleep at ${firstTime} | Sleepy Calc`;
      } else if (activeTab === "when-to-wake") {
        document.title = `⏰ Wake up at ${firstTime} | Sleepy Calc`;
      } else if (activeTab === "power-nap") {
        document.title = `💤 ${results[0]} | Sleepy Calc`;
      }
    } else {
      document.title = "Sleepy Calc - Sleep Calculator";
    }

    // Cleanup: reset title when component unmounts
    return () => {
      document.title = "Sleepy Calc - Sleep Calculator";
    };
  }, [results, activeTab]);

  const calculateBedtime = () => {
    if (!wakeUpTime) {
      alert("Please enter a wake-up time!");
      return;
    }

    const [hours, minutes] = wakeUpTime.split(":").map(Number);
    const wakeDate = new Date();
    wakeDate.setHours(hours, minutes, 0, 0);

    const bedtimes: string[] = [];
    const sleepCycleDuration = 90; // minutes
    const fallAsleepTime = 15; // minutes

    // Calculate 6 sleep cycles (going backwards)
    for (let cycles = 6; cycles >= 1; cycles--) {
      const totalMinutes = cycles * sleepCycleDuration + fallAsleepTime;
      const bedtime = new Date(wakeDate.getTime() - totalMinutes * 60 * 1000);
      
      bedtimes.push(
        bedtime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    }

    setResults(bedtimes);
  };

  const calculateWakeTime = () => {
    const now = new Date();
    const fallAsleepDate = new Date(now.getTime() + 15 * 60 * 1000);

    const wakeUpTimes: string[] = [];
    const sleepCycleDuration = 90; // minutes

    // Calculate 6 wake-up times (going forward)
    for (let cycles = 1; cycles <= 6; cycles++) {
      const totalMinutes = cycles * sleepCycleDuration;
      const wakeTime = new Date(fallAsleepDate.getTime() + totalMinutes * 60 * 1000);
      
      wakeUpTimes.push(
        wakeTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    }

    setResults(wakeUpTimes);
  };

  const calculateNapTime = () => {
    const now = new Date();

    // Power nap (25 minutes)
    const powerNap = new Date(now.getTime() + 25 * 60 * 1000);
    
    // Full cycle nap (90 minutes)
    const fullCycleNap = new Date(now.getTime() + 90 * 60 * 1000);

    const napTimes = [
      `Power Nap: ${powerNap.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`,
      `Full Cycle: ${fullCycleNap.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`,
    ];

    setResults(napTimes);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setResults([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 sm:space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center space-y-2"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block"
        >
          <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary animate-pulse" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          Sleep Calculator
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base text-muted-foreground px-4"
        >
          Calculate the perfect bedtime based on 90-minute sleep cycles
        </motion.p>
      </motion.div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="when-to-sleep" className="gap-2 cursor-pointer">
            <Moon className="h-4 w-4" />
            When to Sleep?
          </TabsTrigger>
          <TabsTrigger value="when-to-wake" className="gap-2 cursor-pointer">
            <Clock className="h-4 w-4" />
            When to Wake?
          </TabsTrigger>
          <TabsTrigger value="power-nap" className="gap-2 cursor-pointer">
            <Zap className="h-4 w-4" />
            Power Nap
          </TabsTrigger>
        </TabsList>

        <TabsContent value="when-to-sleep" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm text-muted-foreground text-center"
            >
              What time do you need to wake up?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TimePickerScroll value={wakeUpTime} onChange={setWakeUpTime} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button onClick={calculateBedtime} className="w-full cursor-pointer" size="lg">
                Calculate Bedtime
              </Button>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="when-to-wake" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="pt-6 space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm text-muted-foreground"
                >
                  Going to bed now? We'll calculate the best times to wake up based on
                  your sleep cycles.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button onClick={calculateWakeTime} className="w-full cursor-pointer" size="lg">
                    I'm Sleeping NOW
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="power-nap" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="pt-6 space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm text-muted-foreground"
                >
                  Need a quick recharge? We'll suggest the perfect nap duration.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button onClick={calculateNapTime} className="w-full cursor-pointer" size="lg">
                    Calculate Nap Time
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <AnimatePresence mode="wait">
        {results.length > 0 && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="pt-6">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-semibold mb-4 flex items-center gap-2"
                >
                  <Moon className="h-5 w-5 text-primary" />
                  {activeTab === "when-to-sleep" && "Recommended Bedtimes:"}
                  {activeTab === "when-to-wake" && "Recommended Wake Times:"}
                  {activeTab === "power-nap" && "Recommended Nap Times:"}
                </motion.h2>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {results.map((time, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.1,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-base sm:text-lg py-1.5 sm:py-2 px-3 sm:px-4 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {time}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-muted-foreground mt-4 flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  {activeTab === "when-to-sleep" &&
                    "These times account for 15 minutes to fall asleep"}
                  {activeTab === "when-to-wake" &&
                    "Waking at the end of a sleep cycle helps you feel refreshed"}
                  {activeTab === "power-nap" &&
                    "Power naps boost energy; full cycles improve memory"}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
