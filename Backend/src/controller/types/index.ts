export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export enum ProjectStatus {
  Completed = "Completed",
  Running = "Running",
  Pending = "Pending",
}

export interface ProjectRequestBody {
  id: string;
  projectName: string;
  projectInterval: string;
  projectStatus: ProjectStatus;
  projectImage: string;
  projectDescription: Text;
}

export interface addStaffRequest {
  id: string;
  staffName: string;
  staffRole: string;
}

export interface addEventRequest {
  id: string;
  eventName: string;
  eventImage: string;
  eventDescription: string;
}

export interface EventData {
  id: string;
  EventName: string;
  EventImage: string;
  EventDescription: string;
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Others = "Others",
}

export enum Role {
  User = "User",
  Admin = "Admin",
}

export interface createUserRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: Gender;
  role: Role;
}

export interface UpdateData {
  message: string;
  affectedRow: Number;
}

export interface DeleteData {
  data?: unknown;
  message: string;
  affectedRow: Number;
}

export interface ImageUrl {
  EventImage: string;
}

export interface GalleryUrl {
  EventImage: string;
}

export interface ProjectUrl {
  ProjectImage: string;
}

export interface staffUrl {
  StaffImage: string;
}