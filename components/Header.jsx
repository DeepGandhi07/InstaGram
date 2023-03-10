import React from "react";
import {
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  UserGroupIcon,
  PlusCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";
const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className=" flex justify-between bg-white">
        {/* Left */}
        <div className="relative hidden lg:inline-grid  ml-2 w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 h-10 mt-4 ml-2 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md  ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            {/* Search Input */}
            <input
              className="bg-gray-50 border-gray-300 block w-full pl-10 sm:text-sm  rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex justify-end items-center space-x-4 mr-3">
          <HomeIcon className="navBtn" />
          <Bars3Icon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <ChatBubbleOvalLeftEllipsisIcon className="navBtn" />
                <div className="absolute -top-1 -right-3 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  10
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="Profile Image"
                className="h-11 w-11 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
