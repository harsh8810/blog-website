import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";

// Set up NextAuth handler for GET requests
export const GET = (req, res) => {
  // For GET requests, NextAuth should handle authentication callbacks
  return NextAuth(req, res, authOptions);
};

// Set up NextAuth handler for POST requests
export const POST = (req, res) => {
  // For POST requests, NextAuth should handle authentication requests
  return NextAuth(req, res, authOptions);
};
