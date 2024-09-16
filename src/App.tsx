/**
 * v0 by Vercel.
 * @see https://v0.dev/t/05LU1Nhxb9z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to='#' className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">John Doe</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">John Doe</h1>
              <h2 className="text-2xl font-medium text-muted-foreground">Software Engineer</h2>
              <p className="text-muted-foreground md:text-xl">
                I am a passionate software engineer with experience in building scalable and efficient web applications.
                I am always eager to learn new technologies and tackle challenging problems.
              </p>
            </div>
            <div className="flex justify-end">
              <img
                src="https://placehold.co/300x300/png"
                width="300"
                height="300"
                alt="John Doe"
                className="rounded-full w-[200px] h-[200px] object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Work Experience</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold">Software Engineer, Acme Inc.</h3>
                    <p className="text-muted-foreground">June 2020 - Present</p>
                    <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                      <li>Developed and maintained complex web applications using React, Node.js, and MongoDB.</li>
                      <li>Collaborated with cross-functional teams to design and implement new features.</li>
                      <li>Optimized application performance and scalability.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Intern, Acme Inc.</h3>
                    <p className="text-muted-foreground">June 2019 - August 2019</p>
                    <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                      <li>Assisted in the development of a new web application using React and Node.js.</li>
                      <li>Participated in code reviews and learned best practices for software development.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Education</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                    <p className="text-muted-foreground">University of Example, 2015 - 2019</p>
                    <p className="text-muted-foreground">GPA: 3.8/4.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2">Programming Languages</h3>
                    <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>Java</li>
                      <li>C++</li>
                    </ul>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2">Frameworks and Libraries</h3>
                    <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                      <li>React</li>
                      <li>Node.js</li>
                      <li>Django</li>
                      <li>Spring</li>
                    </ul>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2">Tools and Technologies</h3>
                    <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                      <li>Git</li>
                      <li>Docker</li>
                      <li>AWS</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2">Soft Skills</h3>
                    <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                      <li>Problem-solving</li>
                      <li>Teamwork</li>
                      <li>Communication</li>
                      <li>Adaptability</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Projects</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold">Personal Website</h3>
                    <p className="text-muted-foreground">Lorem ipsum</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">Vercel</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">E-commerce Platform</h3>
                    <p className="text-muted-foreground">
                      A full-stack e-commerce platform built with Node.js, Express, MongoDB, and React.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">React</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Chatbot Application</h3>
                    <p className="text-muted-foreground">
                      A chatbot application built with Python, Flask, and natural language processing libraries.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Flask</Badge>
                      <Badge variant="secondary">NLP</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to='#' className="text-xs hover:underline underline-offset-4">
            LinkedIn
          </Link>
          <Link to='#' className="text-xs hover:underline underline-offset-4">
            GitHub
          </Link>
          <Link to='#' className="text-xs hover:underline underline-offset-4">
            Email
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}