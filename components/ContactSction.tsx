import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function ContactSction({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:tatsuya91yamaguchi@gmail.com?subject=${formData.subject}&body=${formData.message}%0D%0A%0D%0A%0D%0A${formData.name}(${formData.email})`;
  };

  return (
    <div
      id="contact-section"
      className="flex flex-col text-center h-[90vh] bg-my-lightblue justify-center"
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
        className="justify-center"
      >
        <h2 className="text-2xl mt-10 lg:mt-14 lg:text-3xl lg:mb-5 pb-3 lg:pb-5 px-6">
          Please check the followings if you&apos;d like to know more or send me
          a message.
        </h2>
        <div className="flex justify-center ">
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

        <div className="mb-5 mt-5 sm:my-10 space-y-2 mx-auto">
          <div className="flex item-center justify-center space-x-5">
            <EnvelopeIcon className="text-orange-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">tatsuya91yamaguchi@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 max-w-[90%] w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput py-1 sm:py-4"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput py-1 sm:py-4"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-my-yellow px-10 py-5 rounded-md text-my-black font-bold text-lg hover:scale-105 hover:duration-300">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
