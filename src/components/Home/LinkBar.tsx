import Link from 'next/link';

export default function LinkBar() {
  const linkList = [
    {
      name: '首頁',
      route: '/#main',
    },
    {
      name: '參與社團',
      route: '/#clubs',
    },
    {
      name: '社群文章',
      route: '/#articles',
    },
    {
      name: '內部分組',
      route: '/#teams',
    },
    {
      name: '近期活動',
      route: '/#activities',
    },
    {
      name: '贊助廠商',
      route: '/#sponsors',
    },
  ];
  return (
    <div className="fixed top-0 w-full bg-neutral-950/70 z-[9999] py-4 px-6">
      <ul className="flex items-center justify-center gap-4">
        {linkList.map((e, i) => {
          return (
            <Link
              href={e.route}
              key={i}
              className=" text-white text-lg font-light text-center max-[640px]:max-w-[42px] hover:text-green-400 transition"
            >
              {e.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
