import SolutionPage from '@/components/solutions/SolutionPage';
import { SOLUTIONS, getSolution } from '@/lib/solutionsData';

const SLUG = 'icus';
const sol = getSolution(SLUG);

export const metadata = {
  title: `${sol.name} — PEHSPL Solutions`,
  description: sol.heroSub,
};

export default function Page() {
  return (
    <SolutionPage sol={sol} others={SOLUTIONS.filter((s) => s.slug !== SLUG)} />
  );
}
