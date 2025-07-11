import { Types } from "mongoose";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUIDE = "GUIDE",
}
export enum IsActive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}
export interface IAuthProvider {
  provider: string;
  providedId: string;
}
export interface IUser {
  name: string;
  email: string;
  password?: string;
  phone?: string;
  picture?: string;
  address?: string;
  isDeleted?: string;
  isActive?: IsActive;
  isVerified?: string;
  auths: IAuthProvider[];
  role: Role;
  bookings?: Types.ObjectId[];
  guides?: Types.ObjectId[];
}
