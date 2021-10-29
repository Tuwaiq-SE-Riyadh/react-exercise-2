import img1 from "./img1.jpeg";
import PostItem from "./PostItem";

function ReplayToPost(replay) {

    console.log(replay);
  return (
    <>
      <div className="mention-container">
        <div className="header">
          <div>
            <img src={img1} />
          </div>
          <div>
            <p>user name: </p>
          </div>
        </div>
        <div className="contetnt">
          <p>{replay.replay}</p>
        </div>
        <div className="footer">
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default ReplayToPost;
