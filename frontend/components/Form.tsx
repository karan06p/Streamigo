"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import logo from "@/public/logo.svg"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image";


const SignUpFormSchema = z.object({
  username: z.string().min(2, {message: "Must be minimum 2 characters"}).max(16, {message: "Must be maximum 16 characters"}),
  email: z.string().email({message: "Invalid email address"}),
  password: z.string().min(8, {message: "Cannot be lower than 8 characters"}).max(24, {message: "Cannot me more than 24 characters"})
})
const SignInFormSchema = z.object({
  email: z.string().email({message: "Invalid email address"}),
  password: z.string().min(8, {message: "Cannot be lower than 8 characters"}).max(24, {message: "Cannot me more than 24 characters"})
})

export function SignUpForm() {
    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof SignUpFormSchema>) => {
      const response = await fetch("http://localhost:4000/api/users/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      if(response.ok){
        console.log(responseData.message)
      }else {
        console.log("Signup failed")
      }

    }

    return (
        <div className="w-full h-full flex flex-col items-center gap-y-10">
        <Form {...form}>
            <div className="flex flex-col items-center gap-2">
                
                <h2 className="text-xl">Sign Up</h2>
                <p className="flex text-sm text-gray-800/80">Register to Streamigo to enjoy video streaming seamlessly!</p>
                <Image src={logo} alt="logo" width={100} height={50} />
            </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="123@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    )
}

export function SignInForm(){
    const form = useForm<z.infer<typeof SignInFormSchema>>({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof SignInFormSchema>) => {
      const response = await fetch("http://localhost:4000/api/users/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      if(response.ok){
        console.log(responseData.message)
      }else {
        console.log("Signin failed")
      }

    }

    return (
        <div className="w-full h-full flex flex-col items-center gap-y-8">
        <Form {...form}>
            <div className="flex flex-col items-center gap-2">
                
                <h2 className="text-xl">Sign Up</h2>
                <p className="flex text-sm text-gray-800/80">Register to Streamigo to enjoy video streaming seamlessly!</p>
                <Image src={logo} alt="logo" width={100} height={50} />
            </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="123@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    )
}