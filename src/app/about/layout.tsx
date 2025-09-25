export const metadata = {
  title: "About | Rise of the Rejects",
  description:
    "Learn more about the creator of ROTR and the vision behind this dystopian world.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>{children}</div>
  );
}
