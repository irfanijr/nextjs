import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({ title, desc, actionLabel, actionHref }: Props) {
  return (
    <div className="empty-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      {actionLabel && actionHref ? (
        <Link href={actionHref}> {actionLabel}</Link>
      ) : actionLabel ? (
        <button>{actionLabel}</button>
      ) : null}
    </div>
  );
}
