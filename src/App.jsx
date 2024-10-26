function App() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className=" flex basis-1/2">
        <img src="assets/side-image.png" className="flex object-cover w-full lg:h-full h-56" alt="Ini gambar Hp"></img>
      </div>
      <div className="p-8 flex flex-col gap-5 justify-center lg:basis-1/2 px-40">
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium">Create an account</h1>
          <p className="">Enter your details below</p>
        </div>

        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email or Phone Number"></input>
              <input type="password" placeholder="Password"></input>
              </div>

              <div className="flex flex-col gap-4 lg:flex-row justify-center">
                <button className="bg-red-600 px-6 py-2 text-neutral-50">Create Account</button>
                <button className="border-solid border-2 border-black-600 px-6 py-2">Sign up with Google</button>
              </div>

              <div className="flex flex-row gap-4 items-center justify-center">
                <h1>Already have account?</h1>
                <h1 className="text-red-400">Log in</h1>
              </div>
            </div>
    </section>
  )
}

export default App;