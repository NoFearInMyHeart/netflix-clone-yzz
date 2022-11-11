import Layout from '../components/layout';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
interface Inputs {
  email: string;
  password: string;
}

export default function Login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (params) => {
    const { email, password } = params;
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };
  return (
    <Layout title="Netflix">
      <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Image
          className="-z-10 !hidden opacity-60 sm:!inline"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          layout="fill"
          objectFit="cover"
        />
        <img
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/440px-Netflix_2015_logo.svg.png"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:wax-w-md relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:px-14"
        >
          <h1 className="text-4xl font-semibold">Sign In</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                className="input"
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid email.
                </p>
              )}
            </label>
            <label className="inline-block w-full">
              <input
                className="input"
                type="password"
                placeholder="Password"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
            </label>
          </div>

          <button
            className="w-full rounded bg-[#e50914] py-3 font-semibold"
            onClick={() => setLogin(true)}
          >
            Sign In
          </button>
          <div className="text-[gray]">
            New To Netflix ?{' '}
            <button
              type="submit"
              className="text-white hover:underline"
              onClick={() => setLogin(false)}
            >
              Sign up now
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
