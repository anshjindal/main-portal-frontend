import { motion } from 'framer-motion'
import { SignUp } from '@clerk/clerk-react'
import LoginIllustrator from '../Login/LoginIllustrator';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2703a5] via-[#3b14b0] to-[#4f25bb] p-4 page-background">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl flex flex-col md:flex-row justify-around items-center h-full space-y-6 md:space-y-0"
      >
        {/* Adjust the width and stacking behavior on smaller screens */}
        <div className="w-full md:w-1/2 h-full flex justify-center ">
          <LoginIllustrator />
        </div>

        {/* Adjust the SignIn component's width and spacing on smaller screens */}
        <div className="w-full md:w-1/2 flex justify-center px-4">
          <SignUp />
        </div>
      </motion.div>
    </div>
  )
}


export default Register;