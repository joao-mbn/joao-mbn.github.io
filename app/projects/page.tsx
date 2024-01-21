import { ExternalLink, Page } from '../components';

export default function Projects() {
  return (
    <Page>
      <section>
        <h2>Open Source Contributions</h2>
        <section>
          <h3>
            <ExternalLink href="https://www.npmjs.com/package/@types/hot-formula-parser">
              @types/hot-formula-parser
            </ExternalLink>
          </h3>
          <p>
            Added Typescript support to the{' '}
            <ExternalLink href="https://www.npmjs.com/package/hot-formula-parser">hot-formula-parser</ExternalLink>, a
            Javascript package for interpreting strings as Excel formulas.
          </p>
        </section>
      </section>
      <section>
        <h2>Personal Projects</h2>
        <section>
          <h3>
            <ExternalLink href="https://github.com/joao-mbn/etr-optimization">REE Optimizations</ExternalLink>
          </h3>
          <p>
            The algorithm for rare-earth elements separation process optimization used in my{' '}
            <a download="Thesis.pdf" href="/TCC - João Nascimento.pdf">
              thesis (in portuguese)
            </a>
            . The algorithm aimed to minimize the cost of separation of Rare earth Elements (REE) from one another, by
            using experimental data to define the most important process variables and which combination of those were
            more likely to yield a lower cost under certain boundaries.
          </p>
        </section>
        <section>
          <h3>
            <ExternalLink href="https://get-holydays.vercel.app/">Holydays</ExternalLink>
          </h3>
          <p>
            A website that will help you strategically plan your vacations to combo with weekends and holidays. See the
            project at <ExternalLink href="https://github.com/joao-mbn/holydays">Github</ExternalLink>
          </p>
        </section>
      </section>
    </Page>
  );
}
