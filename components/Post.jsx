import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
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
      <img src={img} alt="" className="object-cover w-full" />
      {/* Buttons */}
      {/* Caption */}
      {/* Comments */}
      {/* Input Box */}
      {/* <img src={userImg} alt="" />
      <img src={img} alt="" />
      <p>{caption}</p> */}
    </div>
  );
};

export default Post;
