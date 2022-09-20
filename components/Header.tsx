import React from "react";
import {
  HomeIcon,
  ClockIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <nav className="flex fixed top-0 left-0 justify-evenly w-full bg-my-lightblue border-b-4 border-my-yellow md:justify-end z-20">
        <ul className="flex text-2xl">
          <a href="#welcome-section">
            <li className="p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
              <HomeIcon className="h-7 w-7" />
              <p className="hidden md:inline-flex">Welcome</p>
            </li>
          </a>
          <a href="#timeline-section">
            <li className="p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
              <ClockIcon className="h-7 w-7" />
              <p className="hidden md:inline-flex">Timeline</p>
            </li>
          </a>
          <a href="#project-section">
            <li className="p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
              <BuildingLibraryIcon className="h-7 w-7" />
              <p className="hidden md:inline-flex">Libraries</p>
            </li>
          </a>
          <a href="#contact-section">
            <li className="p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
              <ChatBubbleLeftRightIcon className="h-7 w-7" />
              <p className="hidden md:inline-flex">Contact </p>
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
