import { useState } from "react";
import { FilterSection } from "@/components/FilterSection";
import { StudentsTable } from "@/components/StudentsTable";
import { mockStudents } from "@/data/mockStudents";
import { GraduationCap } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [students] = useState(mockStudents);

  const handleApplyFilter = () => {
    toast.success("Filters applied successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto py-6 px-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Student Document Management</h1>
              <p className="text-sm text-muted-foreground">
                Manage and track student documents efficiently
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        <FilterSection onApplyFilter={handleApplyFilter} />
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Students List</h2>
          <p className="text-muted-foreground">
            {students.length} students found
          </p>
        </div>

        <StudentsTable students={students} />
      </div>
    </div>
  );
};

export default Index;
