"use client";

import { motion } from "framer-motion";
import { Shield, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 sm:space-y-12"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center space-y-2"
      >
        <Shield className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-2 text-primary" />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Terms and Privacy
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Your privacy and transparency matter to us
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card>
          <CardContent className="pt-6 space-y-6">
            <p className="text-sm">
              This agreement describes the conditions and rules under which <strong>Sleepy Calc</strong> ("we", "our site") 
              offers you its services at <strong>sleepy-calc.com</strong>.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Terms</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  By using the services of <strong>sleepy-calc.com</strong>, you agree to observe all of the following conditions and rules:
                </p>

                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm">
                      <strong>1.</strong> Use of the <strong>sleepy-calc.com</strong> service is at your own risk.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-destructive/40">
                    <p className="text-sm mb-2">
                      <strong>2.</strong> <strong>The service is for informational purposes only and is not medical advice.</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The calculations provided are based on general sleep cycle theories. They are not a substitute for professional medical advice, 
                      diagnosis, or treatment. Always consult a healthcare professional for any sleep or health-related concerns. 
                      We are not liable for any decisions you make based on this information.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm">
                      <strong>3.</strong> The <strong>sleepy-calc.com</strong> service is provided "AS IS" and does not provide any guarantees, 
                      express or implied, that the service will be accurate, reliable, or error-free.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm">
                      <strong>4.</strong> You may use the <strong>sleepy-calc.com</strong> service for any purpose, personal or commercial.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm">
                      <strong>5.</strong> You agree not to integrate the <strong>sleepy-calc.com</strong> service into your own or 3rd party applications 
                      (e.g., by "iframing" or "hotlinking") without our prior written permission.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm">
                      <strong>6.</strong> We reserve the right to change or cease any of the services at <strong>sleepy-calc.com</strong>, at any time.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm">
                      <strong>7.</strong> We reserve the right to change the terms of this agreement at any time without notice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-bold mb-4">Privacy</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  By using our service, you agree that we may collect and process information as described below.
                </p>

                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm mb-2">
                      <strong>8.</strong> <strong>In order to improve the quality of the sleepy-calc.com service, 
                      we may save and analyze the metadata of your requests.</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      This includes non-personal data such as your IP address, browser type, and pages visited, 
                      which are collected in our server logs (hosted by Vercel). This helps us understand user traffic and maintain the security of our site.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm mb-2">
                      <strong>9.</strong> <strong>We use "Cookies" and "Local Storage" for functional and statistical purposes.</strong>
                    </p>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                      <li>
                        <strong>Local Storage:</strong> We use localStorage to save your preferences, such as your theme choice 
                        (light or dark mode). This data is stored only in your browser.
                      </li>
                      <li>
                        <strong>Cookies:</strong> We may use cookies for statistical purposes (e.g., Vercel Analytics) 
                        to understand how our service is used.
                      </li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm">
                      <strong>10.</strong> We do not knowingly collect personal information from children under the age of 13.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact
                </h2>
                <p className="text-sm text-muted-foreground">
                  If you have any questions about these terms, you can contact us at:{" "}
                  <a href="mailto:contact@sleepy-calc.com" className="text-primary hover:underline font-semibold">
                    contact@sleepy-calc.com
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
