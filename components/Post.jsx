import React from "react";
import {
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      {/* image */}
      <img src={userImg} alt="" className="object-cover w-full" />
      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>
      {/* Comments */}
      {/* Input Box */}
      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a Comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button>Post</button>
      </form>
      {/* <img src={userImg} alt="" />
      <img src={img} alt="" />
    <p>{caption}</p> */}
    </div>
  );
};

export default Post;
