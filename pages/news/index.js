// Our-domain.com/

import Link from "next/link";
import React from "react";

export default function NewsPage() {
  return (
    <div>
      <h1>New Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">nextjs</Link>
        </li>
        <li>
          <Link href="/news/next-app">nextjs app</Link>
        </li>
      </ul>
    </div>
  );
}
