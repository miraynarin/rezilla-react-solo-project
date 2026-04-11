export interface PurpleCircleProps {
  width: string;
  height: string;
  bottom?: string;
  right?: string;
  rotation: number;
  top?: string;
  left?: string;
  className?: string;
  color?: string; // opsiyonel
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
  color,
}: PurpleCircleProps) => {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        bottom,
        left,
        top,
        right,
        position: "absolute",
        transform: `rotate(${rotation}deg)`,
        borderRadius: "50%",
        opacity: 0.5,
        zIndex: 5,
        background:
          color ??
          "linear-gradient(180deg, #4361ee 0%, rgba(67, 97, 238, 0) 100%)",
      }}
    />
  );
};

export default PurpleCircle;
