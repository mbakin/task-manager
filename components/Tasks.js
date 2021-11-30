import InProgress from "./InProgress";
import Todos from "./Todos";
export default function Tasks() {
  return (
    <div className="bg-gray-50 flex-1 overflow-auto">
      <main className="p-3 h-full inline-flex space-x-2">
        <Todos />
        <InProgress />
      </main>
    </div>
  );
}
