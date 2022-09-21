import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ContactSction({}: Props) {
  return (
    <div
        id="contact-section"
        className="flex flex-col text-center h-contact bg-my-lightblue justify-center"
      >
        <motion.div
          initial={{
            y: -20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
        <h2 className="text-2xl lg:text-4xl lg:mb-5 pb-3 lg:pb-5 px-6">
          Please check the followings if you&apos;d like to know more...
        </h2>
        <div className="flex justify-center">
          <a
            href="https://github.com/Tatyy555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-extrabold underline px-2 text-3xl lg:text-5xl hover:text-my-yellow hover:translate-y-2 hover:duration-300">
              GitHub
            </p>
          </a>
          <a
            href="https://www.kaggle.com/tatyy555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-extrabold underline px-2 text-3xl lg:text-5xl hover:text-my-yellow hover:translate-y-2 hover:duration-300">
              Kaggle
            </p>
          </a>
        </div>
        </motion.div>
      </div>
  )
}