import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DocumentUploadItem } from "@/components/DocumentUploadItem";
import { mockStudents } from "@/data/mockStudents";
import { DocumentStatus } from "@/types/student";
import { ArrowLeft, GraduationCap } from "lucide-react";

export default function UploadDocument() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  
  const student = mockStudents.find((s) => s.id === studentId);
  const [documents, setDocuments] = useState<DocumentStatus[]>(
    student?.documents || []
  );

  if (!student) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Student not found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const handleUpload = (documentId: string, file: File) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === documentId
          ? {
              ...doc,
              uploaded: true,
              uploadedAt: new Date().toISOString(),
              fileUrl: URL.createObjectURL(file),
            }
          : doc
      )
    );
  };

  const uploadedCount = documents.filter((d) => d.uploaded).length;
  const totalCount = documents.length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Students
        </Button>

        <Card className="p-6 mb-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={student.profileImage} alt={student.name} />
              <AvatarFallback className="text-2xl">
                {student.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{student.name}</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Roll No</p>
                  <p>{student.rollNo}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Class</p>
                  <p>{student.class}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Branch</p>
                  <p>{student.branch}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Course</p>
                  <p>{student.course}</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-2">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                {uploadedCount}/{totalCount} Uploaded
              </p>
            </div>
          </div>
        </Card>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Required Documents</h2>
          <p className="text-muted-foreground">
            Please upload all required documents for student admission
          </p>
        </div>

        <div className="space-y-3">
          {documents.map((document) => (
            <DocumentUploadItem
              key={document.id}
              document={document}
              onUpload={handleUpload}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Button size="lg" onClick={() => navigate("/")}>
            Save & Return
          </Button>
        </div>
      </div>
    </div>
  );
}
