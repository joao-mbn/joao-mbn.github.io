import { Page } from './components';

export default function Home() {
  return (
    <Page>
      <h1>About me</h1>
      <section>
        <p>
          Hello there! I&apos;m João, a natural problem solver and Devil&apos;s Advocate with {getMyAge()} years of
          experience.
        </p>
        <p>
          If I were to describe myself, it wouldn&apos;t be as someone with an extensive range of knowledge, but rather
          as someone insatiably curious, always seeking knowledge for its own sake. I take pride in my ability to
          rapidly grasp and learn anything that comes my way.
        </p>
      </section>
      <section>
        <h2>My Professional Background</h2>
        <p>
          In spite of having almost a decade of study and practice in the domain of chemistry and its applications,
          holding a bachelor&apos;s degree in chemical engineering and a technician degree in chemistry, I work as a
          software developer.
        </p>
        <p>
          During the COVID pandemic, I stumbled upon the fascinating realm of programming through friends engaged in
          algorithmic trading. Recognizing the potential for enhancing my academic research in an industrial process for
          attaining pure rare earth elements, I decided to learn the basics, and not long after, I was implementing my
          first algorithms for process optimization. The algorithm helped me achieve impressive results and was
          responsible, in no small part, for granting me two consecutive yearly awards for the best undergraduate
          research in the institution I carried it. Upon further refinements, I used this algorithm for my thesis.
        </p>
        <p>
          Eager to continue exploring the world of programming, I seized an internship opportunity in software
          development. In a short span, I learned the basics of web development, API management, and database querying,
          securing a full-time position as a full-stack developer within a year and a half.
        </p>
      </section>
      <section>
        <h2>Life Goals</h2>
        <p>
          The world even though arguably better than ever, it has nonetheless far too many problems for me to think that
          just doing my part will be sufficient. And some problems have or will have taken such proportions as to
          endanger our species as a whole.
        </p>
        <p>
          As a software developer committed to earning to give, I see my profession not only as a means of personal
          success but as a powerful tool to address societal issues. By leveraging my skills, I aim to generate
          resources that can be strategically directed towards initiatives with the potential to create lasting,
          meaningful change contributing to solve the world&apos;s most pressing problems
        </p>
        <p>
          Besides that, focusing on the hope for a better future provides an justification for the daily struggles. It
          transforms routine challenges into opportunities for growth and positive impact. Thus, it isn&apos;t just an
          act of charity; it&apos;s a reciprocal exchange that benefits both the giver and the receiver. The intrinsic
          satisfaction derived from knowing that I am contributing to positive change in the world adds a sense of
          purpose to my life.
        </p>
      </section>
      <section>
        <h2>Hobbies</h2>
        <p>
          Before chemistry and programming took the center stage, my childhood fascination with maps and flags sparked a
          lifelong interest in understanding places and people. This curiosity manifested in a habit of filling gaps in
          my knowledge about different corners of the globe—what they look like, who inhabits them, and the stories they
          hold. This passion naturally led me to explore various subjects, including geography, history, languages,
          evolutionary biology, economics, and politics. My interests have evolved into a hobby that continuously fuels
          my quest for knowledge.
        </p>
        <p>
          As a result, I&apos;ve cultivated a decent general understanding of these diverse fields and can navigate five
          languages to varying extents: Portuguese, Spanish, French, German, and English.
        </p>
        <p>
          I like to have moments throughout the day where I can leverage the diffuse mode of thinking, which is to say
          that I turn my brain off. At these times I&apos;m usually running or working out and listening to some RPG
          podcast or heavy metal.
        </p>
      </section>
    </Page>
  );
}

function getMyAge() {
  const today = new Date();
  const birthDate = new Date(1997, 1, 17);

  const yearDifference = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    return yearDifference - 1;
  } else {
    return yearDifference;
  }
}

