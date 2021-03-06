import React from "react";
import Container from "@components/Container";
import Image from "next/image";
import ModalImage from "react-modal-image";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCar } from "@redux/action/carAction";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, data: searchData } = useSelector((state) => state.carID);
  const { id } = router.query;

  useEffect(() => {
    dispatch(getCar(id));
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <section className="relative h-[266px] w-full bg-slate-200">
        <Container>
          <div className="mx-auto flex items-center py-4">
            <div className="w-3/5">
              <Image
                src="/logo-biru.png"
                alt="logo biru"
                layout="fixed"
                width={100}
                height={34}
              />
            </div>
            <div className="flex w-2/5">
              <ul className="text-md flex flex-row items-center space-x-8 font-medium">
                <li>Our Service</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
              </ul>
              <button className="mx-4 rounded bg-red-600 p-2 font-medium text-white">
                {" "}
                Logout
              </button>
            </div>
          </div>
        </Container>
      </section>
      <div className="absolute inset-x-60 top-48 h-[142px] w-[1047px] rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
        <h6 className="pb-4 text-sm font-bold">Pencarianmu</h6>
        <div className="flex">
          <div className="flex w-[237px] flex-col">
            <label htmlFor="" className="pb-1 text-xs">
              {" "}
              Tipe Driver
            </label>
            <input
              type="text"
              className="h-9 w-[221px] rounded-sm border border-slate-900 py-2 px-3 text-xs"
            />
          </div>
          <div className="flex w-[237px] flex-col">
            <label htmlFor="" className="pb-1 text-xs">
              {" "}
              Tanggal
            </label>
            <input
              type="date"
              className="h-9 w-[221px] rounded-sm border border-slate-900 py-2 px-3 text-xs"
            />
          </div>
          <div className="flex w-[237px] flex-col">
            <label htmlFor="" className="pb-1 text-xs">
              {" "}
              Waktu Jemput/Ambil
            </label>
            <input
              type="date"
              className="h-9 w-[221px] rounded-sm border border-slate-900 py-2 px-3 text-xs"
            />
          </div>
          <div className="flex w-[237px] flex-col">
            <label htmlFor="" className="pb-1 text-xs">
              {" "}
              Jumlah Penumpang (optional)
            </label>
            <input
              type="number"
              className="h-9 w-[221px] rounded-sm border border-slate-900 py-2 px-3 text-xs"
            />
          </div>
          <div className="flex w-[51px] flex-col justify-end">
            <button className="border border-dark-blue-04 py-2 px-2 text-sm font-bold text-dark-blue-04 hover:bg-dark-blue-04 hover:text-white">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-28 flex h-[1000px]">
        <div className="mr-8 h-[618px] w-2/3 rounded-lg border border-slate-200 p-6 text-sm shadow-sm">
          <h1 className="pb-4 font-bold">Tentang Paket</h1>
          <p className="pb-2">Include</p>
          <ul className="list-disc pl-4 leading-loose">
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <p className="pb-2 pt-4">Exclude</p>
          <ul className="list-disc pl-4 leading-loose">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <h1 className="pt-6 pb-4 font-bold">Refund, Reschedule, Overtime</h1>
          <ul className="list-disc pl-4 leading-relaxed">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
        <div className="h-[435px] w-1/3 rounded-lg border border-slate-200 shadow-sm">
          <div className="px-16 pt-7">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <ModalImage
                small={searchData.image}
                medium={searchData.image}
                showRotate={true}
                imageBackgroundColor={"white"}
              />
            )}
          </div>
          <div className="px-6">
            <h1 className="pt-4 pb-1 text-sm font-bold">{searchData.name}</h1>
            <div className="flex py-2">
              <ul className="flex items-center space-x-1 text-xs">
                <Image
                  src="/fi-users.png"
                  alt="icon-users"
                  layout="fixed"
                  width={20}
                  height={20}
                />
                <li className="pl-1 pr-4">2 Orang</li>
                <Image
                  src="/fi-settings.png"
                  alt="icon-settings"
                  layout="fixed"
                  width={20}
                  height={20}
                />
                <li className="pl-1 pr-4">Manual</li>
                <Image
                  src="/fi-calendar.png"
                  alt="icon-calendar"
                  layout="fixed"
                  width={20}
                  height={20}
                />
                <li className="pl-1 pr-4">Tahun 2020</li>
              </ul>
            </div>
            <div className="flex justify-between pt-12">
              <p>Total</p>
              <p className="font-bold">Rp {searchData.price}</p>
            </div>
            <Link href="/tiket">
              <a>
                <button className="mt-6 w-full bg-lime-green-04 py-2 px-3 text-center font-bold text-white">
                  Lanjutkan Pembayaran
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
