import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./MemeGenerator.css";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeList, setMemeList] = useState([]);
  const [memeImage, setMemeImage] = useState("");
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        setMemeList(memes);
        setMemeImage(memes[4].url);
      });
  }, []);
  const handleImageChange = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * memeList.length);
    const randMemeImg = memeList[randNum].url;
    setMemeImage(randMemeImg);
  };
  return (
    <div>
      <div class="text-input-container">
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
      </div>
      <div className="button-container">
        <Button buttonText="Change image" onClick={handleImageChange} />
      </div>
      <div className="meme-image-container">
        <div className="meme-image-wrapper">
          <h2 className="meme-text meme-top-text">{topText}</h2>
          <img className="meme-image" src={memeImage} alt="Meme" />
          <h2 className="meme-text meme-bottom-text">{bottomText}</h2>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
