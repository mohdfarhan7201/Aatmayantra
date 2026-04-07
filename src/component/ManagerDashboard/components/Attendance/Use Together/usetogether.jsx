import AttendanceTrend from "./AttendanceTrend";
import TodayAttendance from "./TodayAttendance";

export default function Dashboard() {
  return (
    <div className="flex gap-4 mt-5">
      <AttendanceTrend />
      <TodayAttendance />
    </div>
  );
}