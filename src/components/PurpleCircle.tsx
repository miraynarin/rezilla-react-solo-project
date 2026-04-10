export interface PurpleCircleProps {
  width: string;
  height: string;
  bottom?: string;
  right?: string;
  rotation: number;
  top?: string;
  left?: string;
  className?: string;
  color?: string;
}
const PurpleCircle = ({
  width,
  height,
  bottom,
  right,
  rotation,
  top,
  left,
  className,
  color = "linear-gradient(180deg, #A855F7 0%, rgba(168, 85, 247, 0) 100%)",
}: PurpleCircleProps) => {
  return (
    <div
      className={className}
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
        background: color,
      }}
    ></div>
  );
};

export default PurpleCircle;
