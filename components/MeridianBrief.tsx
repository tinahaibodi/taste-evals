import Reveal from "./Reveal";

const SCREENS: { id: string; title: string; body: string; caption: string }[] = [
  {
    id: "submission",
    title: "Expense submission",
    body:
      "New expense form: amount, currency, date, category, merchant, cost center/project, memo, receipt upload. Must handle draft state, validation errors, and duplicate receipt warning.",
    caption: "The new expense form, with receipt upload and inline validation.",
  },
  {
    id: "my-expenses",
    title: "My expenses",
    body:
      "Filterable list of the user's own expenses with status. Each row opens the detail view.",
    caption: "The employee's own expenses, filterable by status.",
  },
  {
    id: "approval-queue",
    title: "Approval queue",
    body:
      "Pending items for the logged in approver, sorted by age. Actions: approve, reject, request more info. Bulk approve for items under a policy threshold. Shows policy flags inline.",
    caption: "The approver inbox, oldest first, with policy flags inline.",
  },
  {
    id: "detail",
    title: "Expense detail",
    body:
      "Receipt preview alongside expense data, full audit trail, comment thread, status history. This is the screen auditors will look at, completeness over cleverness.",
    caption: "Receipt beside the data, with the full audit trail below.",
  },
  {
    id: "dashboard",
    title: "Dashboard",
    body:
      "Spend by category, team, and cost center; budget vs. actual; pending approval count and aging; month over month trend. Default view for finance and admin roles.",
    caption: "The finance overview: spend, budget vs. actual, and approval aging.",
  },
  {
    id: "transactions",
    title: "Transactions table",
    body:
      "All company expenses: searchable, filterable, sortable, CSV export. Must handle long merchant names, large amounts, and thousands of rows gracefully.",
    caption: "Every company expense in one searchable, exportable table.",
  },
  {
    id: "policy",
    title: "Policy and approval rules",
    body:
      "Configure approval chains, spend thresholds per category, required fields, receipt requirements.",
    caption: "Admin configuration for approval chains and policy thresholds.",
  },
  {
    id: "settings",
    title: "Settings and billing",
    body: "Company profile, accounting export settings, plan and usage summary.",
    caption: "Company settings, accounting export, and plan usage.",
  },
];

const GLOSSARY: { term: string; def: string }[] = [
  { term: "Cost center", def: "Budget bucket an expense is charged to." },
  {
    term: "Approval chain",
    def: "Ordered sequence of approvers required before an expense is approved.",
  },
  {
    term: "Policy flag",
    def: "Automatic warning generated when an expense violates a configured rule.",
  },
  {
    term: "Reimbursement",
    def: "Payment made to the employee after final approval.",
  },
  {
    term: "Audit trail",
    def: "Immutable history of every action taken on an expense.",
  },
];

export default function MeridianBrief() {
  return (
    <section id="brief">
      <div className="col prose">
        <Reveal>
          <h2 className="section-title">Meridian: Expense Tracking App</h2>
        </Reveal>

        <Reveal>
          <div className="point">
            <h3 className="point-title">Project overview</h3>
            <p>
              Meridian is an enterprise expense management platform with two primary
              user groups.
            </p>
            <p>
              <b>Employees</b> submit, manage, and track expenses.
            </p>
            <p>
              <b>Management</b> i.e. approvers review, approve, audit, and monitor
              company spend.
            </p>
            <p>
              <b>Deliverable:</b> One responsive web application, optimized for desktop.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="point">
            <h3 className="point-title">Design approach</h3>
            <p>
              This is an enterprise workflow product. Most interface problems in this
              application are already solved.
            </p>
            <p>
              When designing Meridian, utilize established fintech design patterns over
              inventing new interactions. Before designing a screen or component, identify
              the underlying user task and retrieve the canonical interaction patterns
              used by Ramp, Mercury, and Stripe components. Adapt those patterns to
              Meridian&apos;s design system rather than creating novel workflows.
            </p>
            <p>
              <em>Treat these as deterministic interaction problems.</em>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="section-title" style={{ marginTop: 48 }}>
            Screens and functionality
          </h2>
        </Reveal>

        {SCREENS.map(({ id, title, body, caption }) => (
          <Reveal key={id}>
            <div className="point">
              <h3 className="subhead">{title}</h3>
              <p>{body}</p>
              <figure className="point-figure" style={{ marginTop: 18 }}>
                <img
                  src={`https://picsum.photos/seed/meridian-${id}/1200/675`}
                  alt={title}
                  loading="lazy"
                />
                <figcaption className="point-caption">{caption}</figcaption>
              </figure>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="point">
            <h3 className="point-title">Visual requirements</h3>
            <p>
              High information density and restrained color: status and policy flags are
              the only places color carries meaning. A table first design language, with
              the Vercel dashboard, Mercury, Ramp, and Linear&apos;s table patterns as
              references. WCAG AA contrast throughout, with keyboard navigable tables
              and approval actions.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="point">
            <h3 className="point-title">Glossary</h3>
            {GLOSSARY.map(({ term, def }) => (
              <p key={term}>
                <b>{term}:</b> {def}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
