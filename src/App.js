import ProfileImage from "../src/assests/images/profile.jpg"
import SmallerProfileImage from "../src/assests/images/small_profile.jpg"
function App() {
  return (
    <div className="font-raleway bg-black text-white">
      <nav className="w-full fixed border-b bg-black z-50">
        <div className="w-11/12 mx-auto py-4 flex justify-between items-center">
          <p className="font-bold">FA</p>
          <div className="hidden md:flex flex-col md:flex-row items-center gap-4">
            <ul className="flex flex-col md:flex-row items-center gap-4">
              <li className="cursor-pointer font-medium">Home</li>
              <li className="cursor-pointer font-medium">About</li>
              <li className="cursor-pointer font-medium">Skills</li>
              <li className="cursor-pointer font-medium">Projects</li>
              <li className="cursor-pointer font-medium">Contact</li>
            </ul>
            <p className="px-4 py-2.5 border rounded-full w-fit font-semibold text-base md:text-lg cursor-pointer">Resume </p>
          </div>
        </div>
      </nav>
      <section className="py-8 sm:py-10 md:py-12 border-b">
        <div className="w-11/12 min-h-screen mx-auto flex items-center items">
          <p className="absolute text-6xl right-20 top-40">🚀</p>
          {/* <p className="absolute text-3xl left-0 right-0 mx-auto w-fit bottom-10">⚡</p> */}
          {/* <p className="absolute text-6xl right-20 top-40">💡</p> */}
          <div className="space-y-3 md:w-4/6 relative">
            {/* <p className="absolute text-6xl -left-4 z-10 -top-10">💡</p> */}
            <p className="text-base md:text-lg z-20 relative">
              Hi there 🤗,
            </p>
            <h1 className="text-3xl md:text-6xl font-bold">
              I'm Feyisayo Amujoyegbe 
            </h1>
            <h2 className="text-xl md:text-3xl font-bold">
              A Frontend Web Developer💻
            </h2>
            <p className="text-base md:text-lg">
              I specialize in creating responsive and user-friendly web solutions that make a high impact using <span className="font-bold underline">React</span>. I'm passionate about bringing ideas to life and solving 
              problems through innovative design and development.
            </p>
            <p className="px-4 py-2.5 border rounded-full w-fit font-semibold text-base md:text-lg cursor-pointer">
              Learn More 
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-10 md:py-12 border-b">
        <div className="w-11/12 mx-auto space-y-9">
          <h3 className="text-2xl md:text-3xl font-semibold relative after:absolute after:w-10 after:h-1 after:bg-white after:-bottom-3 after:left-0">About Me 🦜</h3>
          <div className="flex flex-col-reverse md:flex-row gap-10">
            <div className="space-y-3 w-fit">
              <p className="text-base md:text-lg">
                Hello! My name is Feyisayo, a frontend web developer based in Nigeria. I studied at Redeemers University, where I completed my Bachelors Degree in Computer Science.
              </p>
              <p className="text-base md:text-lg">
                My passion for technology began during my formative years, and it ultimately led me to pursue a career in software development. I started my journey by learning the 
                fundamentals of Python and Java and utilizing them in a variety of contexts, including web scraping and Android app development. However, as I delved deeper into the field, 
                I discovered my true calling in web development. Today, as a frontend web developer, I find great joy in crafting intuitive and visually stunning interfaces that engage 
                users and drive results. 
              </p>
              <p className="text-base md:text-lg">
                With my expertise in HTML, CSS, JavaScript, and other web technologies, I'm dedicated to delivering top-notch solutions that meet the unique needs of each project. 
                From simple landing pages to complex web applications, I approach each project with a strong attention to detail and a commitment to excellence. While I take pride 
                in my frontend web development skills, I'm also eager to continue expanding my knowledge and skills to become a full-stack developer.
              </p>
              <p className="text-base md:text-lg">
                Overall, my journey in tech has been both rewarding and challenging, and I'm excited to continue growing and developing my skills in the years to come.
              </p>
            </div>
            <div className="w-full xl:w-[700px] xl:h-full bg-black relative after:absolute after:-bottom-10 after:h-[350px] after:w-[350] after:bg-white after:-right-10">
              <img src={ window.innerWidth < 1280 ? SmallerProfileImage : ProfileImage} alt="" className="w-full xl:w-[700px] xl:h-full object-cover " />
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-10 md:py-12 border-b">
        <div className="w-11/12 mx-auto space-y-9">
          <h2 className="text-2xl md:text-3xl font-semibold relative after:absolute after:w-10 after:h-1 after:bg-white after:-bottom-3 after:left-0">Skills💪🏽</h2>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:flex gap-4">
            <div className="px-4 py-2.5 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-base md:text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 md:w-7 fill-white" viewBox="0 0 24 24"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
              HTML
            </div>
            <div className="px-4 py-2.5 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-base md:text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 md:w-7 fill-white" viewBox="0 0 24 24"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
              CSS
            </div>
            <div className="px-4 py-2.5 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-base md:text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 fill-white"  viewBox="0 0 24 24" ><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/></svg>
              JavaScript 
            </div>
            <div className="px-4 py-2.5 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-base md:text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 md:w-7 fill-white" viewBox="0 0 24 24"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
              TailwindCSS
            </div>
            <div className="px-4 py-2.5 border rounded-full w-fit flex items-center justify-between gap-4 group font-semibold text-base md:text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 md:w-7 fill-white" viewBox="0 0 24 24"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
              React
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-10 md:py-12 border-b">
        <div className="w-11/12 mx-auto space-y-9">
          <h2 className="text-2xl md:text-3xl font-semibold relative after:absolute after:w-10 after:h-1 after:bg-white after:-bottom-3 after:left-0">
            Projects🥇
          </h2>
          <p>
            <span className="text-base md:text-lg font-semibold">Freelance Work Experience - </span>
            <span className="text-sm md:text-base">Projects done for clients</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 bg-slate-800 py-6 justify-between min-h-[370px]">
              <div className="mx-auto space-y-2.5 ">
                <h3 className="text-xl font-semibold px-6">OAU CV Builder</h3>
                <hr></hr>
                <div className="flex gap-3 px-6 pt-1">
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">ReactJS</p> 
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">Talwind CSS</p>
                </div>
                <p className="px-5 ">
                  A CV-building web application developed specifically for staff of the Obafemi Awolowo University. It enables staff 
                  to easily and efficiently create and customize their CVs with an intuitive and user-friendly interface. The application accepts various 
                  data inputs and formats, and includes a preview feature for staff to view their CV layout and formatting before downloading it as a PDF document.
                </p>
              </div>
              <div className="flex gap-4 px-6"> {/* justify-between */}
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white"> 
                  <svg class="w-6 h-6 dark:opacity-50 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live
                </p>
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white fill-[#878b95]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6 fill-[#878b95] group-hover:fill-white">
                    <g class="w-6 h-6 mr-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
                    </g>
                  </svg>
                  Github
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-slate-800 py-6 justify-between min-h-[370px]">
              <div className="mx-auto space-y-2.5 ">
                <h3 className="text-xl font-semibold px-6">Eyekontact (Ongoing)</h3>
                <hr></hr>
                <div className="flex gap-3 px-6 pt-1">
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">ReactJS</p> 
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">Talwind CSS</p>
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">AOS</p>
                </div>
                <p className="px-5 ">
                  A company website that serves as an online platform for conducting business. The website provides comprehensive information about the company's services and facilitates customer communication. 
                  It features a booking system that allows customers to reserve products and services, and a multi-user dashboard for company staff to manage assets, products, and services. The platform also leverages 
                  Twilio for effective communication of important information about the company's products and assets to customers.
                </p>
              </div>
              <div className="flex gap-4 px-6"> {/* justify-between */}
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white"> 
                  <svg class="w-6 h-6 dark:opacity-50 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live
                </p>
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white fill-[#878b95]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6 fill-[#878b95] group-hover:fill-white">
                    <g class="w-6 h-6 mr-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
                    </g>
                  </svg>
                  Github
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-slate-800 py-6 justify-between min-h-[370px]">
              <div className="mx-auto space-y-2.5 ">
                <h3 className="text-xl font-semibold px-6">KuroComm</h3>
                <hr></hr>
                <div className="flex gap-3 px-6 pt-1">
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">HTML</p> 
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">CSS</p>
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">AOS</p>
                </div>
                <p className="px-5 ">
                  A company website that effectively showcases the company's products and services, giving them an online presence. 
                  The website provides a comprehensive overview of the company, its values, and mission, helping to establish the company's brand identity. It also serves as 
                  a platform for customers to interact with the company and learn more about its offerings. Through effective use of design, layout, and content, the website 
                  helps to establish a strong online presence for the company, enhancing its visibility and reach.
                </p>
              </div>
              <div className="flex gap-4 px-6"> {/* justify-between */}
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white"> 
                  <svg class="w-6 h-6 dark:opacity-50 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  Live
                </p>
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white fill-[#878b95]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6 fill-[#878b95] group-hover:fill-white"><g class="w-6 h-6 mr-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>
                  Github
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-slate-800 py-6 justify-between min-h-[370px]">
              <div className="mx-auto space-y-2.5 ">
                <h3 className="text-xl font-semibold px-6">Hypestrike (Ongoing)</h3>
                <hr></hr>
                <div className="flex gap-3 px-6 pt-1">
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">ReactJS</p> 
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">Talwind CSS</p>
                </div>
                <p className="px-5 ">
                  A company website that serves as an online platform for conducting business. The website provides comprehensive information about the company's products 
                  and services and facilitates customer communication. It features a booking system that allows customers to reserve products and services, and a multi-user 
                  dashboard for company staff to manage assets, products, and services. The platform also leverages Twilio for effective communication of important information 
                  about the company's products and assets to customers.
                </p>
              </div>
              <div className="flex gap-4 px-6"> {/* justify-between */}
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white"> 
                  <svg class="w-6 h-6 dark:opacity-50 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live
                </p>
                {/* <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white fill-[#878b95]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6 fill-[#878b95] group-hover:fill-white">
                    <g class="w-6 h-6 mr-0">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
                    </g>
                  </svg>
                  Github
                </p> */}
              </div>
            </div>
          </div>

          <p>
            <span className="text-base md:text-lg font-semibold">Personal Projects - </span>
            <span className="text-sm md:text-base">Projects done for personal growth</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 bg-slate-800 py-6 justify-between min-h-[370px]">
              <div className="mx-auto space-y-2.5 ">
                <h3 className="text-xl font-semibold px-6">Learning Management System</h3>
                <hr></hr>
                <div className="flex gap-3 px-6 pt-1">
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">ReactJS</p> 
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">Talwind CSS</p>
                </div>
                <p className="px-5 ">
                  A student-centered Learning Management System (LMS) as a web application that provides distance learning students with a 
                  comprehensive and interactive online learning experience. The case study is Al-Hikmah University. 
                </p>
              </div>
              <div className="flex gap-4 px-6"> {/* justify-between */}
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white"> 
                  <svg class="w-6 h-6 dark:opacity-50 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live
                </p>
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white fill-[#878b95]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6 fill-[#878b95] group-hover:fill-white">
                    <g class="w-6 h-6 mr-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
                    </g>
                  </svg>
                  Github
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-slate-800 py-6 justify-between min-h-[370px]">
              <div className="mx-auto space-y-2.5 ">
                <h3 className="text-xl font-semibold px-6">Cho’s Restaurant</h3>
                <hr></hr>
                <div className="flex gap-3 px-6 pt-1">
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">ReactJs</p> 
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">CSS</p>
                </div>
                <p className="px-5 ">
                  A professional restaurant website that showcases the restaurant's cuisine, including information on individual dishes and their pricing. 
                </p>
              </div>
              <div className="flex gap-4 px-6"> {/* justify-between */}
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white"> 
                  <svg class="w-6 h-6 dark:opacity-50 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live
                </p>
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white fill-[#878b95]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6 fill-[#878b95] group-hover:fill-white">
                    <g class="w-6 h-6 mr-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
                    </g>
                  </svg>
                  Github
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-slate-800 py-6 justify-between min-h-[370px]">
              <div className="mx-auto space-y-2.5 ">
                <h3 className="text-xl font-semibold px-6">76gems</h3>
                <hr></hr>
                <div className="flex gap-3 px-6 pt-1">
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">ReactJS</p> 
                  <p className="bg-slate-500 text-sm py-2 px-3 rounded-md">CSS</p>
                </div>
                <p className="px-5 ">
                  A dynamic and responsive modern dashboard that provides users with real-time data and analytics in a visually engaging and user-friendly format.
                </p>
              </div>
              <div className="flex gap-4 px-6"> {/* justify-between */}
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white"> 
                  <svg class="w-6 h-6 dark:opacity-50 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live
                </p>
                <p className="flex items-center gap-2 group cursor-pointer text-[#878b95] hover:text-white fill-[#878b95]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6 fill-[#878b95] group-hover:fill-white">
                    <g class="w-6 h-6 mr-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
                    </g>
                  </svg>
                  Github
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-10 md:py-12 border-b">
        <div className="w-11/12 mx-auto space-y-9">
          <h3 className="text-2xl md:text-3xl font-semibold relative after:absolute after:w-10 after:h-1 after:bg-white after:-bottom-3 after:left-0">Contact 📱</h3>
          <div className="text-base md:text-lg">
            <p>
              I'm currently available to get involved in new projects, so get in touch if you'd like to work together.
              Email me at <span className="font-bold">feyisayoamujoyegbe@gmail.com</span> and let's talk about your project!
            </p>
          </div>
        </div>
      </section>
      <footer className="py-4 space-y-4">
        <p className="w-fit mx-auto text-base md:text-lg text-center">© 2023 - Built and Designed by Feyisayo Amujoyegbe</p>
        <div className="flex gap-4 justify-center items-center md:fixed md:bottom-0 md:right-6 md:flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6 md:w-8 md:h-8 fill-[#878b95] hover:fill-white cursor-pointer"><g class="w-6 h-6 mr-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-8 md:h-8 fill-[#878b95] hover:fill-white cursor-pointer" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
          <div className="hidden md:block w-0.5 h-56 bg-white"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
