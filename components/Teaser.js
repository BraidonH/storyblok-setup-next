import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return <h2 className="text-2xl mb-10 text-black" {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
