import React from 'react';
import PageContainer from './PageContainer';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border py-8 bg-background">
      <PageContainer className="flex items-center justify-center text-center">
        <p className="font-sans font-normal text-meta text-text-secondary">
          © 2026 Parth Shah. Last updated June 2026.
        </p>
      </PageContainer>
    </footer>
  );
}
