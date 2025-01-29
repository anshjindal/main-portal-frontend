import { motion } from 'framer-motion';

export default function LoginIllustrator() {
  return (
    <div className="w-full h-full flex items-center justify-center aspect-w-4 aspect-h-3">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        aria-labelledby="loginIllustratorTitle loginIllustratorDesc"
      >
        <title id="loginIllustratorTitle">Login Illustration</title>
        <desc id="loginIllustratorDesc">
          An illustration showing a person logging into a computer system
        </desc>

        {/* Computer Screen */}
        <motion.rect
          x="200"
          y="100"
          width="400"
          height="300"
          rx="20"
          fill="#ffffff"
          stroke="#2563eb"
          strokeWidth="4"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Computer Stand */}
        <motion.path
          d="M350 400 L450 400 L420 500 L380 500 Z"
          fill="#2563eb"
          variants={{
            hidden: { scaleY: 0, opacity: 0 },
            visible: { scaleY: 1, opacity: 1 },
          }}
          transition={{ duration: 0.3, delay: 0.7 }}
        />

        {/* Login Form */}
        <motion.rect
          x="250"
          y="150"
          width="300"
          height="200"
          rx="10"
          fill="#f3f4f6"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Username Field */}
        <motion.rect
          x="270"
          y="180"
          width="260"
          height="40"
          rx="5"
          fill="#ffffff"
          stroke="#d1d5db"
          variants={{
            hidden: { width: 0 },
            visible: { width: 260 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Password Field */}
        <motion.rect
          x="270"
          y="240"
          width="260"
          height="40"
          rx="5"
          fill="#ffffff"
          stroke="#d1d5db"
          variants={{
            hidden: { width: 0 },
            visible: { width: 260 },
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />

        {/* Login Button */}
        <motion.rect
          x="270"
          y="300"
          width="260"
          height="40"
          rx="5"
          fill="#2563eb"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          transition={{ duration: 0.3, delay: 1 }}
        />

        {/* Person */}
        <motion.circle
          cx="650"
          cy="300"
          r="60"
          fill="#2563eb"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.path
          d="M610 420 Q650 360 690 420"
          stroke="#2563eb"
          strokeWidth="20"
          fill="none"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1 },
          }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />

        {/* Connection Line */}
        <motion.path
          d="M550 300 C600 300, 600 300, 590 300"
          stroke="#2563eb"
          strokeWidth="4"
          strokeDasharray="8 8"
          fill="none"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1 },
          }}
          transition={{ duration: 1, delay: 1.6 }}
        />

        {/* Lock Icon */}
        <motion.path
          d="M385 220 h30 v-10 a15 15 0 0 0 -30 0 v10"
          stroke="#2563eb"
          strokeWidth="4"
          fill="none"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 0.3, delay: 1.8 }}
        />
        <motion.rect
          x="375"
          y="220"
          width="50"
          height="40"
          rx="5"
          fill="#2563eb"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 0.3, delay: 2 }}
        />
      </motion.svg>
    </div>
  );
}
