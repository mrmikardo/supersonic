export default async function Navbar() {
  return (
    <nav>
      <ul>
        <li className='flex gap-4 text-lg'>
          <a href='/' className='hover:line-through'>
            Tees
          </a>
          |
          <a href='/about' className='hover:line-through'>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
