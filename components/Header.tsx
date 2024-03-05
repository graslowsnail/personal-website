import Link from 'next/link';

const navigation = [
  {name:'Projects', href: '/projects'},
  {name:'About Me', href: '/aboutme'},
];

export default function Header () {

return (
  <header className="bg-white border-b-2">
    <div className='ml-5'>
      <div className='text-5xl'>Pablo Ramirez</div>
      <div className='text-2xl'> full stack web devloper</div>
    </div>

    <nav className='justify-between p-4'>
      <div className="flex gap-x-4 md:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <div className="text-sm font-semibold text-gray-900 hover:text-red-600 underline underline-offset-2">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
    </nav>
  </header>
);
}
