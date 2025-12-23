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
  description: Text;
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
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Gender: Gender;
  Role: Role;
  UserImage: string;
}