import React from "react";

interface ImageProps {
  url: string;
}

export default function Image({ url }: ImageProps) {
  return <img src={url} />;
}
