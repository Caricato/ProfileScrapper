import { CircularProgress } from "@mui/material";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <CircularProgress size={300} />
    </div>
  );
};

export default Loading;
