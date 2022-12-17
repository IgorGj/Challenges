type Props = {
  author: string;
  message: string;
  stars: number;
};

export const Review = ({ author, message, stars }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <p>
        <span style={{ fontWeight: "bolder" }}>Author: </span>{" "}
        <span>{author}</span>
      </p>
      <p>
        <span style={{ fontWeight: "bolder" }}>Message: </span>
        <span>{message}</span>
      </p>
      <p>
        <span style={{ fontWeight: "bolder" }}>Stars: </span>
        <span>{stars}</span>
      </p>
    </div>
  );
};
