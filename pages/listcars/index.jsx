import Head from "next/head";
import Bars from "@components/Bars";
import Link from "next/link";
import Image from "next/image";

function listcars() {
  return (
    <>
      <Head>
        <title>List Cars &mdash; Binar Car Rental</title>
      </Head>
      <Bars>
        <div className="flex justify-between">
          <h1 className="text-xl font-medium">List cars</h1>
          <Link href="/listcars/addcars">
            <a>
              <button className="flex items-center rounded-sm bg-dark-blue-04 py-2 px-3 text-sm font-bold text-white">
                <Image
                  src="/fi-plus.png"
                  alt="icon-users"
                  layout="fixed"
                  width={18}
                  height={18}
                />
                Add New Car
              </button>
            </a>
          </Link>
        </div>
        <div className="flex space-x-4 pt-6">
          <button className="rounded-sm border border-dark-blue-02 bg-white py-2 px-3 font-bold text-dark-blue-02 hover:border-dark-blue-04 hover:bg-dark-blue-01 hover:text-dark-blue-04">
            All
          </button>
          <button className="rounded-sm border border-dark-blue-02 bg-white py-2 px-3 font-bold text-dark-blue-02 hover:border-dark-blue-04 hover:bg-dark-blue-01 hover:text-dark-blue-04">
            Small
          </button>
          <button className="rounded-sm border border-dark-blue-02 bg-white py-2 px-3 font-bold text-dark-blue-02 hover:border-dark-blue-04 hover:bg-dark-blue-01 hover:text-dark-blue-04">
            Medium
          </button>
          <button className="rounded-sm border border-dark-blue-02 bg-white py-2 px-3 font-bold text-dark-blue-02 hover:border-dark-blue-04 hover:bg-dark-blue-01 hover:text-dark-blue-04">
            Large
          </button>
        </div>
        <div className="py-8">
          <div className="h-[482px] w-[351px] rounded-lg border bg-white p-6">
            <div className="p-4">
              <Link href="/detailcars">
                <a>
                  <Image
                    src="/fi-car.png"
                    alt="car-card"
                    layout="fixed"
                    width={270}
                    height={160}
                    className="cursor-pointer"
                    priority
                  />
                </a>
              </Link>
            </div>
            <p className="font-sm pt-4">Nama/Tipe Mobil</p>
            <p className="font-base pt-2 font-bold">Rp 430.000 / hari</p>
            <ul>
              <li className="flex items-center py-4">
                <Image
                  src="/fi-key.png"
                  alt="icon-key"
                  layout="fixed"
                  width={18}
                  height={18}
                />
                <span className="pl-2">Start rent - Finish rent</span>
              </li>
              <li className="flex items-center pb-2">
                <Image
                  src="/fi-clock.png"
                  alt="icon-key"
                  layout="fixed"
                  width={18}
                  height={18}
                />
                <span className="pl-2">Updated at 4 Apr 2022, 09.00</span>
              </li>
            </ul>
            <div className="flex space-x-4 py-6">
              <button className="flex w-[143.5px] items-center justify-center rounded-sm border border-red-600 py-2 px-3 text-red-600">
                <Image
                  src="/fi-trash-2.png"
                  alt="icon-key"
                  layout="fixed"
                  width={19}
                  height={18}
                />
                <span className="pl-2">Delete</span>
              </button>
              <button className="flex w-[143.5px] items-center justify-center rounded-sm border bg-lime-green-04 py-2 px-3 text-white">
                <Image
                  src="/fi-edit.png"
                  alt="icon-key"
                  layout="fixed"
                  width={19}
                  height={18}
                />
                <span className="pl-2">Edit</span>
              </button>
            </div>
          </div>
        </div>
      </Bars>
    </>
  );
}
// @refresh reset
export default listcars;
