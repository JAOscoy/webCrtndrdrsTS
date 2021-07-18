/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import "./common.scss";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList
      sx={{ width: "auto", height: "auto", overflow: "scroll" }}
      cols={3}
      rowHeight={250}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "./resources/agujeros.jpg",
    title: "Base",
  },
  {
    img: "./resources/baseAgujeros.jpg",
    title: "Base",
  },
  {
    img: "./resources/Charola1.jpg",
    title: "Tray",
  },
  {
    img: "./resources/simpleBox.jpg",
    title: "Generic",
  },
  {
    img: "./resources/regular1.jpg",
    title: "Holes",
  },
  {
    img: "./resources/regularReverso.jpg",
    title: "Reverse",
  },
];