export default function HoverText({ text }: { text: string }) {
  return (
    <div className="group inline-flex cursor-pointer items-center">
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
        [
      </span>
      {text}
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
        ]
      </span>
    </div>
  );
}
