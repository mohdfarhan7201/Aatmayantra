export default function ProgressCircle({ value }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-green-400 flex items-center justify-center text-xs">
        {value}%
      </div>
    </div>
  );
}