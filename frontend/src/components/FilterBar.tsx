import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function FilterBar() {
  return (
    <div className="flex flex-col gap-4 py-6 px-4">
      <h1 className="text-3xl font-semibold text-center">Connect. Collaborate. Create.</h1>
      
      <div className="flex justify-center">
        <Input
          type="text"
          placeholder="Search by name, department, or expertise"
          className="w-full max-w-2xl"
        />
      </div>

      <div className="flex gap-2 justify-center flex-wrap">
        <Button variant="outline">Department</Button>
        <Button variant="outline">Role</Button>
        <Button variant="outline">Expertise</Button>
        <Button variant="ghost" className="text-blue-500">Clear Filters ✕</Button>
      </div>
    </div>
  );
}
export default FilterBar;