"use client";
import axiosInstance from "@/utils/axiosInstance";
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import Input from "@/components/global/Input";
import Button from "@/components/global/Button";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // const router = useRouter();

  const handleInputChange = (name: string, value: string | number) => {
    if (name === "email") setEmail(value as string);
    if (name === "password") setPassword(value as string);
    if (name === "confirm_password") setConfirmPassword(value as string);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    if (!confirmPassword)
      newErrors.confirm_password = "Confirm Password is required.";
    if (password !== confirmPassword)
      newErrors.confirm_password = "Passwords do not match.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axiosInstance.post("/api/user/register", {
        email,
        password,
        confirmPassword,
      });
      console.log("Account created successfully:", response.data);

      // Save the token to localStorage
      localStorage.setItem("token", response.data.token.token);

      // Redirect to the home page
      // router.push("/");
    } catch (error) {
      console.error("Error creating account:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <main className="flex flex-col">
      <h1 className="text-center text-header text-3xl font-semibold">
        Create an account
      </h1>
      <p className="text-center text-bodytext mt-2">
        Enter your credentials to create your account
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5 mt-6">
        <Input
          type="email"
          name="email"
          label="EMAIL"
          placeholder="Enter Email"
          modelValue={email}
          error={!!errors.email}
          customError={errors.email}
          onUpdateModelValue={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          label="CREATE PASSWORD"
          placeholder="Enter Password"
          modelValue={password}
          error={!!errors.password}
          customError={errors.password}
          onUpdateModelValue={handleInputChange}
        />
        <Input
          type="password"
          name="confirm_password"
          label="CONFIRM PASSWORD"
          placeholder="Enter Password"
          modelValue={confirmPassword}
          error={!!errors.confirm_password}
          customError={errors.confirm_password}
          onUpdateModelValue={handleInputChange}
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
