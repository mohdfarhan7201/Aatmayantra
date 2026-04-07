import ProgressTracker from "./ProgressTracker";
import CoursePerformance from "./CoursePerformance";

export default function Dashboard() {
  return (
    <div className="flex gap-4 w-full p-5">
      
      {/* Left Card */}
      <div className="flex-[2]">
        <ProgressTracker />
      </div>

      {/* Right Card */}
      <div className="flex-[1]">
        <CoursePerformance />
      </div>

    </div>
  );
}