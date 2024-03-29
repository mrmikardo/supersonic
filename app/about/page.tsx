export const runtime = 'edge';

export default async function About() {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <div className='flex flex-col gap-2 self-center px-4 text-justify md:w-3/4 lg:w-1/3'>
        <p>
          David, Jack and Tristan founded Supersonic in 2023. All three share a
          love for well-crafted, beautiful clothing which brings joy to its
          wearers. Supersonic aims to produce apparel which sports simple,
          vibrant, hand-drawn designs.
        </p>
        <br />
        <p>
          David has been making artwork across a wide variety of media for many
          years, influenced by the space-age comic books and novels he grew up
          with. The 1960s were a time of hope and optimism; by the year 2000, we
          believed, humanity would spread to the stars and it would be possible
          to fly from London to Tokyo for the afternoon. By the end of the
          decade, NASA had put a man on the moon and Concorde had flown its
          first successful test flight. Supersonic aspires to bring a little bit
          of that 60s vision to contemporary living.
        </p>
        <br />
        <p>
          All of Supersonic’s designs are produced by David in his home studio
          before being printed onto high-quality 100% cotton tees. We aim to
          provide a delightful experience to our customers — if you’d like to
          share any feedback or comments, please do feel free to reach out to us
          at{' '}
          <a
            className='underline'
            href='mailto:supersonic.clothingldn@gmail.com'
          >
            supersonic.clothingldn@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
