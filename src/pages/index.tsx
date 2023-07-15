import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import './index.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>Rainbow Devs</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rainbow Devs</title>;
