"use client"

import ProjectsList from '@/components/Projects-list';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Belle's Portfolio</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>Introduction goes here...</p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ProjectsList />
      </section>
    </main>
  );
}