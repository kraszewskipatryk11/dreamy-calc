"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function SleepTipsPage() {
  const tips = [
    {
      id: "sleep-cycles",
      title: "What Are Sleep Cycles?",
      content:
        "Sleep cycles are approximately 90-minute periods that repeat throughout the night. Each cycle consists of different stages: light sleep, deep sleep, and REM (Rapid Eye Movement) sleep. Waking up at the end of a complete cycle, rather than in the middle, helps you feel more refreshed and alert. Most adults need 4-6 complete cycles (6-9 hours) per night for optimal rest.",
    },
    {
      id: "blue-light",
      title: "The Impact of Blue Light",
      content:
        "Blue light from screens (phones, tablets, computers, TVs) suppresses melatonin production, the hormone that regulates your sleep-wake cycle. This makes it harder to fall asleep and reduces sleep quality. Try to avoid screens at least 1-2 hours before bedtime, or use blue light filters and night mode settings on your devices. Consider reading a physical book or listening to calming music instead.",
    },
    {
      id: "caffeine-alcohol",
      title: "Caffeine, Alcohol, and Sleep",
      content:
        "Caffeine has a half-life of 5-6 hours, meaning half of it is still in your system hours after consumption. Avoid caffeine after 2-3 PM for better sleep. While alcohol might make you feel drowsy initially, it disrupts REM sleep and causes more frequent awakenings during the night. Try herbal tea or warm milk as evening alternatives.",
    },
    {
      id: "sleep-environment",
      title: "The Ideal Sleep Environment",
      content:
        "Your bedroom should be cool (60-67°F or 15-19°C), dark, and quiet. Temperature: A cooler room promotes better sleep. Darkness: Use blackout curtains or an eye mask to block light. Quiet: Consider earplugs or a white noise machine to mask disruptive sounds. Your mattress and pillows should also be comfortable and supportive.",
    },
    {
      id: "wind-down-routine",
      title: "The Power of a Wind-Down Routine",
      content:
        "Establishing a consistent pre-sleep routine signals to your body that it's time to wind down. This could include: taking a warm bath or shower, practicing gentle stretching or yoga, meditation or deep breathing exercises, journaling, or listening to calming music. Start your routine 30-60 minutes before your target bedtime and do it consistently every night, even on weekends.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 sm:space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-2"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Sleep Tips
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base text-muted-foreground px-4"
        >
          Learn how to optimize your sleep for better health and well-being
        </motion.p>
      </motion.div>

      <Card>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={tip.id}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tip.title}
                    </motion.span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {tip.content}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="bg-muted/50">
          <CardContent className="pt-4 sm:pt-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Quick Sleep Tips</h2>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {[
                "✅ Keep a consistent sleep schedule (even on weekends)",
                "✅ Get natural sunlight during the day",
                "✅ Exercise regularly, but not close to bedtime",
                "✅ Limit daytime naps to 20-30 minutes",
                "✅ Use your bed only for sleep (not work or TV)",
                "❌ Don't force sleep - if you can’t fall asleep after ~20 minutes, get up and do something relaxing (like reading a book or meditating) until you feel sleepy again."
              ].map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {tip}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
