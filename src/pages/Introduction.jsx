import profilePhoto from "../assets/saya.jpeg";

const Introduction = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight font-mono">
          Overview
        </h1>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-2/3 space-y-6">
          <section className="prose dark:prose-invert font-mono max-w-none">
            <p className="text-lg">
              Welcome to my <strong>Documentation</strong>
            </p>
            <p>
              My name is Jabriel Hans Talula, I'm a Software Engineer that
              specialize in Backend side development.
              <br></br> <strong>Lead Software Engineer</strong>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-mono">QuickStart</h2>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md">
              <pre className="font-mono text-white text-sm overflow-x-auto">
                <code className="font-bold">{`jirb := newJirbService(&gorengan);
// Init a gorengan Object first before start the App
jirb.StartCode(":*")
// You can adjust the port via PORT in ENV settings
`}</code>
              </pre>
            </div>
          </section>
        </div>

        <div className="w-full md:w-1/3">
          <div className="flex justify-center">
            <img
              src={profilePhoto}
              alt="Foto Profil"
              className="w-64 h-64 rounded-full mb-4 object-cover border-4 border-white shadow"
            />
          </div>{" "}
          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold font-mono text-center text-white">
              Jabriel Hans Talula
            </h3>
            <p className="text-center text-slate-600 dark:text-slate-400 font-mono">
              Software Engineer
            </p>
            <div className="mt-4 flex justify-center space-x-3">
              <a
                href="#"
                className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold font-mono">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-white font-mono">
              Backend
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-mono">
              I can build a Robust API Services with Golang, TypeScript, and
              Laravel.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-white font-mono">
              FullStack
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-mono">
              I also have experience building apps in monolithic-styled Laravel
              with Inertia and Livewire
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-white font-mono">
              Project Management
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-mono">
              As project manager, I can regulate a small team and lead them to
              victory
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
