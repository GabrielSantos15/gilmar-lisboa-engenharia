type BarProps = {
  color?: string;
  width?: string;
  height?: string;
  text?: string;
};

export default function Bar({
  color = "var(--color-primary)",
  width = "75px",
  height = "3px",
  text,
}: BarProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded" style={{ backgroundColor: color, width, height }} />
      {text && <h4 style={{color}}>{text}</h4>}
    </div>
  );
}