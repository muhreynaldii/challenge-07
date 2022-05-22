import Image from "next/image";
import Head from "next/head";

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard &mdash; Binar Car Rental</title>
      </Head>
      <div className="absolute left-16 top-0 right-0 flex h-16 items-center bg-white py-4 px-6 shadow-md">
        <div className="w-1/5">
          <Image
            src="/logo-dashboard.png"
            alt=""
            layout="fixed"
            width={100}
            height={34}
          />
        </div>
        <div className="w-3/5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18H21"
              stroke="#151515"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="#151515"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#151515"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mx-2 flex w-2/5 items-center justify-end">
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-slate-200 p-1"
            placeholder="search"
          />
          <button className="border-2 border-blue-700 p-1 font-bold text-blue-700">
            Search
          </button>
          <div className="ml-8 mr-4">
            <Image
              src="/icon-user.png"
              alt=""
              layout="fixed"
              width={38}
              height={38}
            />
          </div>
          <h1>User</h1>
          <div className="ml-2">
            <Image
              src="/fi-chevron-down.png"
              alt=""
              layout="fixed"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-1/5 ">
          <div className="h-screen w-1/5 justify-center bg-blue-700">
            <div className="px-4 py-3">
              <Image
                src="/logo-square.png"
                alt=""
                layout="fixed"
                width={34}
                height={34}
              />
            </div>
            <Image
              src="/nav-home.png"
              alt=""
              layout="fixed"
              width={65}
              height={60}
            />
            <Image
              src="/nav-cars.png"
              alt=""
              layout="fixed"
              width={70}
              height={64}
            />
          </div>
          <div className="h-screen w-4/5 bg-white">
            <div className="pt-20">
              <div className="px-6 py-4">
                <h1 className="font-bold text-slate-400">DASHBOARD</h1>
              </div>
              <div className="bg-slate-300 px-6 py-4">
                <h1 className="font-bold text-black">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-4/5 bg-slate-200 px-4 pt-24">
          <h1 className="text-4xl font-medium">Welcome Admin</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
