export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--background)]">
      <div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-16">
        {children}
      </div>
    </div>
  );
}
