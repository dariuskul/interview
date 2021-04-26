import { FC, memo } from "react";
const ErrorBlock: FC<IErrorBlock> = ({ error }) => {
  if (!error) {
    return null;
  }

  return <div style={{ color: "red" }}>{error}</div>; // Inline styles are bad practice. But for this component, i chose it.
};

export default memo(ErrorBlock);
