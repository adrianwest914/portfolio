import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hello, I am Adrian West
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I am a developer looking to get my start in the industry. I have experience in Javascript, Typescript, C, C#, and other languages. I can use frameworks such as React, Blazor, and other frameworks to create simple and easy to understand webpages. I can also use SQL and SQLite to write database queries. I also can repair electronic devices.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://www.linkedin.com/in/adrian-west-aa62b8218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/linkedin_logo.svg"
              alt="Linkedin Logo Mark"
              width={16}
              height={14}
            />
            Linkedin
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://github.com/adrianwest914"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            className="dark:invert h-[13px] w-4"
            src="/github_logo.svg"
            alt="Github Logo Mark"
            width={15}
            height={13}
            />
            Github
          </a>
        </div>
      </main>
    </div>
  );
}
