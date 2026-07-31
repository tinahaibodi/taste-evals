import { GROUPS } from "./sections";

export default function Toc({ active }: { active: string }) {
  return (
    <nav className="toc" aria-label="Contents">
      {GROUPS.map((group) => (
        <div className="toc-group" key={group.title}>
          <p className="toc-label">{group.title}</p>
          <div className="toc-items">
            {group.items.map(({ id, title }) => (
              <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
                {title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
