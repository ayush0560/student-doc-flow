export interface Student {
  id: string;
  name: string;
  rollNo: string;
  class: string;
  branch: string;
  tenant: string;
  course: string;
  profileImage: string;
  status: "Pending" | "Uploaded";
  documents: DocumentStatus[];
}

export interface DocumentStatus {
  id: string;
  name: string;
  required: boolean;
  uploaded: boolean;
  fileUrl?: string;
  uploadedAt?: string;
}

export const DOCUMENT_TYPES = [
  "Aadhar Card",
  "10th Marksheet",
  "12th Marksheet",
  "Transfer Certificate",
  "ID Card",
  "Birth Certificate",
  "Passport Photo",
  "Caste Certificate",
];
