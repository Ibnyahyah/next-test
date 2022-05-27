import { useRouter } from "next/router";

// Our-domain.com/news/something-important

import React from "react";

export default function DetailsPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  // send a request to the backend API
  // to ferch the news item with newsId

  return <div>The Details {newsId} page</div>;
}
