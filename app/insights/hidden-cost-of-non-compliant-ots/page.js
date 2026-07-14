import InsightArticle from '@/components/insights/InsightArticle';
import { getInsight, relatedInsights } from '@/lib/insightsData';

const SLUG = 'hidden-cost-of-non-compliant-ots';
const article = getInsight(SLUG);

export const metadata = {
  title: `${article.title} — PEHSPL Insights`,
  description: article.excerpt,
};

export default function Page() {
  return <InsightArticle article={article} related={relatedInsights(SLUG)} />;
}