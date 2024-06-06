"use client";
import { useEffect, useState } from "react";
import Input from "@/components/global/Input";
import Button from "@/components/global/Button";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-col">
      <h1 className="text-center text-header text-3xl font-semibold">
        Create an account
      </h1>
      <p className="text-center text-bodytext mt-2">
        Enter your credentials to create your account
      </p>
      <form action="" className="flex flex-col space-y-5 mt-6">
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Enter Email"
        />
        <Input
          type="password"
          name="password"
          label="Create Password"
          placeholder="Enter Password"
        />
        <Input
          type="password"
          name="confirm_password"
          label="Confirm Password"
          placeholder="Enter Password"
        />
        <Button>Create Account</Button>
      </form>
      <p className="text-bodytext2 text-center mt-5 text-xs font-medium">
        Already have an account?
        <Link href="/auth/login">
          <span className="text-primary"> Log In</span>
        </Link>
      </p>
    </main>
  );
}
