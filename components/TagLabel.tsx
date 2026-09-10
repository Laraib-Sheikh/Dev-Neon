export default function TagLabel({ children }: { children: string }) {
  return (
    <p className="tag-label mb-3">
      &lt;{children}&gt;
    </p>
  );
}
