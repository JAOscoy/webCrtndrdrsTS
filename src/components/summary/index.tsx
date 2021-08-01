import "./index.scss";
import * as React from "react";
import { Box } from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { SummaryComponent } from "./types";
import { Button } from "@material-ui/core";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

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

export default function Summary(props: SummaryComponent) {
  const { summaryData } = props;
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box className="summary" id="summary">
      <Grid container className="main">
        <Grid item>
          <Typography
            component="h1"
            variant="h3"
            sx={{ color: "black" }}
            gutterBottom
          >
            {summaryData.title}
          </Typography>
          <Typography
            component="h5"
            color="inherit"
            sx={{ color: "black" }}
            paragraph
          >
            {summaryData.description}
          </Typography>
          <Button variant="contained">
            <Link
              variant="subtitle1"
              underline="none"
              sx={{ color: "white", fontWeight: "bold" }}
              onClick={() => scrollTo("contact")}
            >
              {summaryData.linkText}
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Box className="carrousel">
        <ImageList
        className='listImage'
        sx={{ width: "auto", height: "auto", overflow: "scroll" }}
        cols={3}
        rowHeight={250}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} className='listImageItem'>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                  ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
      </Box>
    </Box>
  );
}
