import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Model = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Model;
