import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex h-[10vh] bg-my-black text-my-white justify-around items-center lg:text-2xl border-t-4 border-my-yellow">
      <p>Thank you for vising</p>
      <p>Created by Yamaguchi</p>
    </footer>
  );
}
