const MobileMenu = () => {
  return (
    <div>
        <nav className="w-full min-h-svh absolute z-50 bg-white shadow-md flex flex-col gap-2 py-2 px-4">
                <a href="/" className="py-2">Home</a>
                <hr />
                <a href="/about" className="py-2">About</a>
                <hr />
                <a href="/contact" className="py-2">Contact</a>
              </nav>
    </div>
  )
}

export default MobileMenu