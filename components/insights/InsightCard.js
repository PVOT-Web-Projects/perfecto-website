import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/insightsData';

export default function InsightCard({ article, animKey }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="ins-card"
      key={animKey}
    >
      <div className="proj-img">
        <div
          className="proj-img-bg"
          style={{ backgroundImage: `url(${article.img})` }}
        />
      </div>
      <div className="ins-card-body">
        <div className="ins-meta">
          <span className="ins-cat">{CATEGORY_LABELS[article.cat]}</span>
          <span>{article.date}</span>
        </div>
        <h3>{article.title}</h3>
        <p className="ins-exc">{article.excerpt}</p>
        <span className="read-more">
          Read More <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
