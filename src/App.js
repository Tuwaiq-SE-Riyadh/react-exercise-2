import logo from "./logo.svg";
import "./App.css";
import img1 from "./img1.jpeg";
import img2 from "./img2.png";
import img4 from "./img4.png";
import Post from "./Components/Post";
import Header from "./Components/Header";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [timelineList, setTimeline] = useState([]);
  const [username, setName] = useState();
  const [tweet, setTweet] = useState();

  const createNewPost = (e) => {
    let array = timelineList.slice();
    let item = { username: username, tweet: tweet };
    array.push(item);
    setTimeline(array);
  };

  const changeUsername = (e) => {
    setName(e.target.value);
    console.log(username);
  };

  const changeTweet = (e) => {
    setTweet(e.target.value);
    console.log(tweet);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setTimeline(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="Main-contaner">
        <Header />
        <div className="timeline">
          <div className="post-container">
            <div className="post">
              <div className="header">
                <div>
                  <img src={img1} />
                </div>
                <div>
                  <input
                    onChange={changeUsername}
                    type="text"
                    placeholder="Your username"
                  />
                </div>
              </div>
              <div>
                <textarea
                  onChange={changeTweet}
                  rows="4"
                  cols="50"
                  placeholder="What in your mind"
                />
              </div>
              <button onClick={createNewPost} className="btn button1">
                Tweet
              </button>
            </div>
          </div>
          <Post timelineList={timelineList} setTimeline={setTimeline} />
        </div>
      </div>
    </>
  );
}
export default App;
