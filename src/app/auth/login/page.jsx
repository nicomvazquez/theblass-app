"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res);
    if (res.error) {
      setError(res.error);
    } else {
      router.push("/admin");
      router.refresh();
    }
  });

  return (
    <div className="py-20 ">
      <form
        onSubmit={onSubmit}
        className="flex flex-col max-w-2xl text-2xl bg-white shadow-xl p-5 m-auto text-start rounded-lg"
      >
        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
            {error}
          </p>
        )}

        <h1 className="text-black font-bold text-4xl mb-4">Login</h1>

        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="border-2 border-black rounded-md p-2"
          placeholder="user@email.com"
        />

        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="border-2 mt-5 border-black rounded-md p-2"
          placeholder="******"
        />

        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}

        <div>
          <button
            type="submit"
            className="mt-5 bg-green-500 py-2 px-3 rounded-md hover:bg-green-600"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
