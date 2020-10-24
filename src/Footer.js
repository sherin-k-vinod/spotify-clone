import React from "react";
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistPlay, VolumeDownOutlined } from "@material-ui/icons";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://img.discogs.com/HeKySdRo8wBHZiLSaS72kEm_b9Y=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12962471-1579022014-7953.jpeg.jpg"
          alt=""
          className="footer__album"
        />
        <div className="footer__songInfo">
          <h4>song name</h4>
          <p>singer name</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDownOutlined />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continues-slider"></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
