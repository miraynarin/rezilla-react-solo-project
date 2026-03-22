export interface BlueCircleProps {
  width: string;
  height: string;
  bottom?: string;
  right?: string;
  rotation: number;
  top?: string;
  left?: string;
}
const PurpleCircle = ({
  width,
  height,
  bottom,
  right,
  rotation,
  top,
  left,
}: BlueCircleProps) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        bottom: bottom,
        left: left,
        top: top,
        right: right,
        position: "absolute",
        transform: `rotate(${rotation}deg)`,
        borderRadius: "50%",
        opacity: 0.5,
        zIndex: 5,
        background:
          "linear-gradient(180deg, #4361ee 0%, rgba(67, 97, 238, 0) 100%)",
      }}
    ></div>
  );
};

export default PurpleCircle;
