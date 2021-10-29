import { useState } from "react";
import img1 from "./img1.jpeg";
import ReplayToPost from "./ReplayToPost";
function PostItem({ tweet, userName }) {
  const [toggle, setToggle] = useState(false);
  const [replay, setReplay] = useState();
  const [replayList, setReplayList] = useState([]);

  const postMention = () => {
    setToggle(!toggle);
  };

  const replayOnPost = (e) => {
    let array = replayList.slice();
    let item = replay;
    array.push(item);
    setReplayList(array);
    postMention()
  };
  const changeReplay = (e) => {
    console.log(replay);

    setReplay(e.target.value);
  };
  return (
    <>
      <div className="post-container">
        <div className="post">
          <div className="header">
            <div>
              <img src={img1} />
            </div>
            <div>
              <p>user name: {userName}</p>
            </div>
          </div>
          <div className="contetnt">
            <p>{tweet}</p>
          </div>
          <div className="footer">
            <div>
              <button onClick={postMention}>replay</button>
              <button>like</button>
              <button>retweet</button>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="mention-container">
            <div className="header">
              <div>
                <img src={img1} />
              </div>
              <div>
                <p>user name: {userName}</p>
              </div>
            </div>
            <div className="contetnt">
              <input onChange={changeReplay} type="text"></input>
            </div>
            <div className="footer">
              <div>
                <button onClick={replayOnPost}> replay</button>
              </div>
            </div>
          </div>
        )}
        {replayList.map((element) => {
          return <ReplayToPost replay={element} />;
        })}
      </div>
    </>
  );
}
export default PostItem;
