export const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r  to-indigo-600 text-black px-6 text-center animate-fade-in">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-2xl md:text-7xl font-extrabold drop-shadow-lg">
          Hello,<br /> my name is <span className="text-indigo-600">Santiago</span><br /> and I am a computer analyst
        </h1>
        <a
          href="/cv.pdf"
          download
          aria-label="Descargar CV"
          className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Contact
        </a>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="w-72 h-72 bg-indigo-100 rounded-full flex items-center justify-center" style={{
            clipPath: "polygon(60% 0%, 100% 40%, 90% 70%, 70% 100%, 20% 90%, 0% 40%, 20% 10%)"
          }}>
          <img src={"/public/imagen.jpg"} alt="Santiago" className="w-48 h-48 object-cover" style={{
            clipPath: "polygon(60% 0%, 100% 20%, 90% 70%, 70% 100%, 20% 90%, 0% 40%, 20% 10%)"
          }} />
        </div>
      </div>
    </section>
  )
}
