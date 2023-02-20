import React from "react";
import imgfeature from "../assets/img/imgfeature.png";

export default function SectionFeature() {
  return (
    <section className="flex justify-center mt-8 relative z-[2]">
      <img src={imgfeature} alt="feature image" />
    </section>
  );
}
