"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Input from "@/components/global/Input";
import Button from "@/components/global/Button";

export default function Login() {
  return (
    <main className="flex flex-col">
      <h1 className="text-center text-header text-3xl font-semibold">Log In</h1>
      <p className="text-center text-bodytext mt-2">
        Enter your credentials to access your account
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
        <Button>Log into Account</Button>
      </form>
      <p className="text-bodytext2 text-center mt-10 text-xs font-medium">
        Are you new here?
        <Link href="/auth/register">
          <span className="text-primary"> Create Account</span>
        </Link>
      </p>
    </main>
  );
}
