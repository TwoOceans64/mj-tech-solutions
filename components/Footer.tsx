export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} MJ Tech Solutions. All rights reserved.</p>
        <p className="mt-1">Fast, reliable tech services across South Africa.</p>
      </div>
    </footer>
  );
}