'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { GrApple } from 'react-icons/gr'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function Login() {
  const [email, setEmail] = React.useState('')
  // const [password, setPassword] = React.useState('')

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4 lg:w-[30%] md:w-[40%] xl:w-[22%]">
      <Link href={'/'} className="my-8">
        <Image src={'/logo.svg'} width={72} height={70} alt="brand-logo" className="dark:invert" />
      </Link>
      <div className=" flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-[Haffer] text-5xl">Welcome</h1>
          <p className="font-light text-xs tracking-widest">
            {`Login to your ${process.env.NEXT_PUBLIC_BRAND_NAME || 'Opentensor.ai'}  account to accesss API and Apps`}
          </p>
        </div>

        <div className="space-y-6 gap-3">
          <div className="w-full flex flex-col gap-3">
            <Label htmlFor="email" className="text-xs font-normal leading-6 tracking-wider">
              EMAIL
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-slate-500"
            />
          </div>

          {/* <div className="w-full flex flex-col gap-3">
            <Label htmlFor="password" className="text-xs font-normal leading-6 tracking-wider">
              PASSWORD
            </Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div> */}
          <Button onClick={() => console.log(email)} className="font-normal w-full">
            Continue with Email
          </Button>
          <p className="text-xs text-zinc-400 ">
            By signing in, you agree to our terms, acceptable use, and privacy policy.
          </p>
          {/* <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-xs font-normal">
              REMEMBER ME
            </Label>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center ">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-normal text-sm">
            Not a member?{' '}
            <Link href="/auth/register" className="hover:underline">
              Register
            </Link>
          </p>
          <p className="font-normal text-sm">Or</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <Button
          variant="outline"
          className="gap-24 flex items-center rounded-md px-2 py-1.5  outline-none font-normal h-[48px] tracking-wide  hover:opacity-[0.86]"
          // onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
          <motion.div
            className={`w-full flex items-center`}
            whileTap={{
              scale: 0.975
            }}
            whileHover={{ scale: 1.01 }}
          >
            <FcGoogle className="h-8 w-8 mx-2" />
            <div className="pr-12 w-full text-black dark:text-white">Continue with Google</div>
          </motion.div>
        </Button>

        <Button
          variant="outline"
          className="gap-24 flex items-center rounded-md px-2 py-1.5  outline-none font-normal h-[48px] tracking-wide  hover:opacity-[0.86]"
          // onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
        >
          <motion.div
            className={`w-full flex items-center`}
            whileTap={{
              scale: 0.975
            }}
            whileHover={{ scale: 1.01 }}
          >
            <FaGithub className="h-8 w-8 mx-2 text-black dark:text-white " />
            <div className="text-black dark:text-white pr-12 w-full">Continue with Github</div>
          </motion.div>
        </Button>

        <Button
          variant="outline"
          className="gap-24 flex items-center rounded-md px-2 py-1.5  outline-none font-normal h-[48px] tracking-wide  hover:opacity-[0.86] "
        >
          <motion.div
            className={` w-full flex items-center`}
            whileTap={{
              scale: 0.975
            }}
            whileHover={{ scale: 1.01 }}
          >
            <GrApple className="h-8 w-8 mx-2 text-black dark:text-white " />
            <div className={`pr-12 w-full text-black dark:text-white `}>Continue with Apple</div>
          </motion.div>
        </Button>
      </div>
    </div>
  )
}

export default Login
