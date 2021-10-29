import { useState } from "react";
import img1 from "./img1.jpeg";
import App from "../App";
import PostItem from "./PostItem";
function Post({ timelineList, setTimeline }) {
  return (
    <>
      {/* call postitem component after return */}
      {timelineList.map((element) => {
        return (
          <PostItem
            tweet={element.body}
            userName={element.userId}
            setTimeline={setTimeline}
          />
        );
      })}
    </>
  );
}
export default Post;
