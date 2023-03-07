import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Model = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return <div>{open && <p>Model is open</p>}</div>;
};

export default Model;
