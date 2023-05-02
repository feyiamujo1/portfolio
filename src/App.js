function App() {
  return (
    <div className="font-raleway bg-black text-white">
      <nav className="w-full fixed border-b bg-black z-50">
        <div className="w-11/12 mx-auto py-5 flex justify-between items-center">
          <p className="font-bold">Feyi Amujo</p>
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4">
              <li className="cursor-pointer font-medium">Home</li>
              <li className="cursor-pointer font-medium">About</li>
              <li className="cursor-pointer font-medium">Skills</li>
              <li className="cursor-pointer font-medium">Projects</li>
              <li className="cursor-pointer font-medium">Contact</li>
            </ul>
            <p className="px-6 py-3 border rounded-full w-fit">Resume </p>
          </div>
        </div>
      </nav>
      <section className="py-8 sm:py-10 md:py-12 border-b">
        <div className="w-11/12 min-h-screen mx-auto flex items-center items">
          <div className="space-y-3 md:w-4/6">
            <p className="text-lg">
              Hi there,
            </p>
            <h1 className="text-6xl font-bold">
              I'm Feyisayo Amujoyegbe
            </h1>
            <h2 className="text-3xl font-bold">
              A Frontend Web Developer
            </h2>
            <p className="text-lg">
              I specialize in creating responsive and user-friendly web solutions that make a high impact using <span className="font-bold">React</span>. I'm passionate about bringing ideas to life and solving 
              problems through innovative design and development.
            </p>
            <p className="p-4 border rounded-full w-fit">
              More about me 
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-10 md:py-12 border-b">
        <div className="w-11/12 mx-auto space-y-9">
          <h3 className="text-3xl font-semibold relative after:absolute after:w-10 after:h-1 after:bg-white after:-bottom-3 after:left-0">About Me</h3>
          <div className="flex gap-10">
            <div className="space-y-3 w-fit">
              <p className="text-lg">
                Hello! My name is Feyisayo, a frontend web developer based in Nigeria. I studied at Redeemers University, where I completed my Bachelors Degree in Computer Science.
              </p>
              <p className="text-lg">
                My passion for technology began during my formative years, and it ultimately led me to pursue a career in software development. I started my journey by learning the 
                fundamentals of Python and Java and utilizing them in a variety of contexts, including web scraping and Android app development. However, as I delved deeper into the field, 
                I discovered my true calling in web development. Today, as a frontend web developer, I find great joy in crafting intuitive and visually stunning interfaces that engage 
                users and drive results. 
              </p>
              <p className="text-lg">
                With my expertise in HTML, CSS, JavaScript, and other web technologies, I'm dedicated to delivering top-notch solutions that meet the unique needs of each project. 
                From simple landing pages to complex web applications, I approach each project with a strong attention to detail and a commitment to excellence. While I take pride 
                in my frontend web development skills, I'm also eager to continue expanding my knowledge and skills to become a full-stack developer.
              </p>
              <p className="text-lg">
                Overall, my journey in tech has been both rewarding and challenging, and I'm excited to continue growing and developing my skills in the years to come.
              </p>
            </div>
            <div className="w-[700px] border bg-black relative after:absolute after:-bottom-10 after:h-[350px] after:w-[350] after:bg-white after:-right-10">
              
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-10 md:py-12 border-b">
        <div className="w-11/12 mx-auto space-y-9">
          <h2 className="text-3xl font-semibold relative after:absolute after:w-10 after:h-1 after:bg-white after:-bottom-3 after:left-0">Skills</h2>
          <div className="w-full flex gap-4">
            <div className="p-4 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-7 fill-white" viewBox="0 0 24 24"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
              HTML
            </div>
            <div className="p-4 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-7 fill-white" viewBox="0 0 24 24"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
              CSS
            </div>
            <div className="p-4 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-white"  viewBox="0 0 24 24" ><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/></svg>
              JavaScript 
            </div>
            <div className="p-4 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-7 fill-white" viewBox="0 0 24 24"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
              TailwindCSS
            </div>
            <div className="p-4 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-7 fill-white" viewBox="0 0 24 24"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
              React
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-10 md:py-12 border-b">
        <div className="w-11/12 mx-auto space-y-9">
          <h2 className="text-3xl font-semibold relative after:absolute after:w-10 after:h-1 after:bg-white after:-bottom-3 after:left-0">
            Projects
          </h2>
          <p>
            <span className="text-lg font-semibold">Freelance Work Experience - </span>
            <span>Work done for clients</span>
          </p>
          <div className="grid grid-cols-2">
            <div className="">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
