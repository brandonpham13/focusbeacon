import { cx } from "@/lib/tw-class-merge"

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("animate-pulse rounded-md bg-[#EAE7DC]", className)}
      {...props}
    />
  )
}
