import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DocumentStatus } from "@/types/student";
import { Upload, CheckCircle2, File } from "lucide-react";
import { toast } from "sonner";

interface DocumentUploadItemProps {
  document: DocumentStatus;
  onUpload: (documentId: string, file: File) => void;
}

export const DocumentUploadItem = ({ document, onUpload }: DocumentUploadItemProps) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      onUpload(document.id, file);
      setUploading(false);
      toast.success(`${document.name} uploaded successfully!`);
    }, 1000);
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {document.uploaded ? (
            <CheckCircle2 className="h-5 w-5 text-success" />
          ) : (
            <File className="h-5 w-5 text-muted-foreground" />
          )}
          <div>
            <p className="font-medium">{document.name}</p>
            {document.uploaded && document.uploadedAt && (
              <p className="text-sm text-muted-foreground">
                Uploaded on {new Date(document.uploadedAt).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {document.uploaded ? (
            <Button variant="outline" size="sm" asChild>
              <label>
                Replace
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </label>
            </Button>
          ) : (
            <Button size="sm" disabled={uploading} asChild>
              <label>
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? "Uploading..." : "Choose File"}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </label>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
