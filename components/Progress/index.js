import { Conatiner } from "./progress.style";

const Progress = ({ obtained, fullScore }) => {
  const percenatge = (obtained / fullScore) * 100;
  return (
    <Conatiner percenatge={percenatge}>
      <div className="mainDiv">
        <div className="childDiv"/>
      </div>
      <div className="text">{obtained}</div>
    </Conatiner>
  );
}

export default Progress