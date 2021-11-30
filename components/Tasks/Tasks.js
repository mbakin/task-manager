import InProgress from "./Task/InProgress";
import Todos from "./Task/Todos";
import Completed from "./Task/Completed";
import Testing from "./Task/Testing";


export default function Tasks() {
  return (
    <div className="bg-gray-50 h-full flex-1 overflow-auto">
      <main className="p-3 h-full inline-flex space-x-2">
        <Todos />
        <InProgress />
        <Testing />
        <Completed />
      </main>
    </div>
  );
}
