import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Filter } from "lucide-react";

interface FilterSectionProps {
  onApplyFilter: () => void;
}

export const FilterSection = ({ onApplyFilter }: FilterSectionProps) => {
  return (
    <Card className="p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Filter Students</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Select defaultValue="dps">
          <SelectTrigger>
            <SelectValue placeholder="Select Tenant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dps">Delhi Public School</SelectItem>
            <SelectItem value="ryan">Ryan International</SelectItem>
            <SelectItem value="dav">DAV Public School</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="main">
          <SelectTrigger>
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="main">Main Campus</SelectItem>
            <SelectItem value="science">Science Block</SelectItem>
            <SelectItem value="commerce">Commerce Block</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            <SelectItem value="10">Class 10</SelectItem>
            <SelectItem value="11">Class 11</SelectItem>
            <SelectItem value="12">Class 12</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="cbse">CBSE</SelectItem>
            <SelectItem value="science">CBSE - Science</SelectItem>
            <SelectItem value="commerce">CBSE - Commerce</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={onApplyFilter} className="w-full">
          Apply Filter
        </Button>
      </div>
    </Card>
  );
};
