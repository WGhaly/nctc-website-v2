import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

// Define the types for the component props for type-safety and reusability
interface WorkflowBuilderCardProps {
  icon?: React.ReactNode;
  number?: number;
  title: string;
  description: string;
  className?: string;
}

export const WorkflowBuilderCard = ({
  icon,
  number,
  title,
  description,
  className,
}: WorkflowBuilderCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Animation variants for the description section
  const descriptionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}  
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className={cn("w-full cursor-pointer", className)}
    >
      <Card className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl border-gray-200 bg-white">
        {/* Number Badge */}
        {number && (
          <div
            className="absolute top-4 right-4 w-12 h-12 rounded-full text-white flex items-center justify-center text-lg font-bold shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #4a81f6, #243996)',
            }}
          >
            {number}
          </div>
        )}

        <div className="p-8">
          {/* Icon */}
          {icon && (
            <div
              className="mb-6 w-16 h-16 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom right, #01093d, #4a81f6)',
              }}
            >
              <div className="text-white">
                {icon}
              </div>
            </div>
          )}

          {/* Title - always visible */}
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            {title}
          </h3>

          {/* Description - always visible now for better UX */}
          <p className="text-gray-700 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(74, 129, 246, 0.1), transparent 70%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
};
