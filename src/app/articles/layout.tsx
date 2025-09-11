export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[90rem] px-6 sm:px-16 py-16">
      {children}
    </div>
  );
}