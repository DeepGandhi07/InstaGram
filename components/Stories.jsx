import React, { useEffect } from "react";
import * as faker from "@faker-js/faker";
const Stories = () => {
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers?.contextualCard(),
      id: i,
    }));
  }, []);

  return <div>{/* Story */}</div>;
};

export default Stories;
