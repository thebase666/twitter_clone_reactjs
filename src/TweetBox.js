import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Trump",
      username: "DonaldTrump",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9ADZoSaNGVg9VzsaBy03r_1t84FKDUf48A&usqp=CAU",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9ADZoSaNGVg9VzsaBy03r_1t84FKDUf48A&usqp=CAU://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} placeholder="What's happening?" type="text" />
        </div>
        <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />
        <Button className="tweetBox__tweetButton" onClick={sendTweet} type="submit">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
