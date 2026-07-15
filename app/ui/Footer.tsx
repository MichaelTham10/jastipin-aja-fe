export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/80 px-6 py-5 text-sm text-gray-400">
      <div className="mx-auto flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xl">© 2026 JastipinAja. Semua hak dilindungi.</p>
        <div className="flex gap-4">
          <a href="/" className="text-xl hover:text-white">Home</a>
          <a href="/product" className="text-xl hover:text-white">Product</a>
        </div>
      </div>
    </footer>
  );
}
