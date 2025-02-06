export default function About({ expanded }) {
  return (
    <div className={`flex flex-col ${expanded ? '' : 'hidden'}`}>
      <p className="text-zinc-600 font-serif mt-2 md:text-center">
        My name is Thoriq Ibrahim Farras. I'm a 3rd year computer science
        student in Universitas Negeri Semarang. I specialize in creating
        simplistic and functional UIs and efficient back-end. My passion is to
        help my local community grow their digital presence. In my free time, I
        love devouring high fantasy novels.
      </p>
      <div className="grid md:grid-cols-2 font-serif">
        <div className="md:text-center">
          <h2 className="font-serif font-bold text-xl mt-8">Education</h2>
          <ul className="font-serif mt-4 text-zinc-600 [&>li>p:nth-child(1)]:text-black [&>li>p:nth-child(1)]:text-lg [&>li>p:nth-child(1)]:mt-4">
            <li>
              <p>Universitas Negeri Semarang [IDN]</p>
              <p>Computer Science. 3.93 GPA</p>
              <p>2022 &ndash; ongoing</p>
            </li>
            <li>
              <p>University of California, Davis [USA]</p>
              <p>Study abroad programme. 3.73 GPA</p>
              <p>Aug &ndash; Dec 2024</p>
            </li>
            <li>
              <p>SMA N 12 Semarang [IDN]</p>
              <p>High school</p>
              <p>2021 &ndash; 2022</p>
            </li>
            <li>
              <p>Sirius Academy North [GBR]</p>
              <p>Secondary education (Middle and High school)</p>
              <p>2017 &ndash; 2020</p>
            </li>
            <li>
              <p>Daarul Quran School Semarang [IDN]</p>
              <p>Elementary school</p>
              <p>2010 &ndash; 2016</p>
            </li>
          </ul>
        </div>
        <div className="md:text-center [&_p]:text-zinc-600">
          <h2 className="font-serif font-bold text-xl mt-8">Interests</h2>
          <h3 className="font-serif font-bold text-lg mt-4">
            Full-stack Development
          </h3>
          <p>
            To craft a fully functioning web app from the ground up and maintain
            it is imperative to help the local community gain digital tractions.
          </p>
          <h3 className="font-serif font-bold text-lg mt-8">
            Machine Learning
          </h3>
          <p>
            The infusion of AI into every facets of life calls for every
            individual in the tech sphere to be able demystify the seemingly
            arcane algorithms.
          </p>
          <h3 className="font-serif font-bold text-lg mt-8">Cloud Computing</h3>
          <p>
            As AI-based solutions scale, cloud computing is slowly becoming the
            backbone of modern computing.
          </p>
        </div>
      </div>
    </div>
  );
}
