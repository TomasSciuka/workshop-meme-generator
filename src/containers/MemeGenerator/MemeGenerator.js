import React, { useState, useEffect } from "react";
import { drawImage } from "./utility";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./MemeGenerator.css";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeList, setMemeList] = useState([]);
  const [memeImage, setMemeImage] = useState("");
  const [colorCode, setColorCode] = useState("white");
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        setMemeList(memes);
        setMemeImage(memes[4].url);
        drawImage("meme", memes[4].url, colorCode);
      });
  }, []);
  const handleImageChange = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * memeList.length);
    const randMemeImg = memeList[randNum].url;
    setMemeImage(randMemeImg);
    drawImage("meme", randMemeImg, colorCode, topText, bottomText);
  };
  const handleGenerateMeme = () => {
    drawImage("meme", memeImage, colorCode, topText, bottomText);
  };
  return (
    <div>
      <div className="text-input-container">
        <Input
          name="topText"
          label="Top text"
          placeholder="Enter top text"
          onChange={setTopText}
          value={topText}
        />
        <Input
          name="bottomText"
          label="Bottom text"
          placeholder="Enter bottom text"
          onChange={setBottomText}
          value={bottomText}
        />
        <Input
          name="colorCode"
          label="Text color"
          placeholder="Enter color or its code"
          onChange={setColorCode}
          value={colorCode}
        />
      </div>
      <div className="button-container">
        <Button buttonText="Change image" onClick={handleImageChange} />
        <Button buttonText="Generate meme" onClick={handleGenerateMeme} />
      </div>
      <div className="meme-image-container">
        <div className="meme-image-wrapper">
          <canvas id="meme" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
