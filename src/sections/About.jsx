export default function About({ expanded }) {
  return (
    <div className={`flex flex-col mx-4 ${expanded ? '' : 'hidden'}`}>
      <img
        src="/src/assets/meAtSac.jpg"
        alt="A portrait of me"
        className="object-center object-cover "
      />
      <p className="text-zinc-600 font-serif mt-2">
        My name is Thoriq Ibrahim Farras. I'm a 3rd year computer science
        student in Universitas Negeri Semarang. I specialize in creating
        simplistic and functional UIs and efficient back-end. My passion is to
        help my local community grow their digital presence.
      </p>
    </div>
  );
}
