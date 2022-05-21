import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home &mdash; Binar Car Rental</title>
      </Head>
      <div className="h-screen w-full bg-slate-200">
        <div className="container mx-auto flex items-center px-10 py-4">
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
            <button
              className="mx-4 rounded bg-red-600 p-2 font-medium text-white"
              onClick={() => handleLogout()}
            >
              {" "}
              Logout
            </button>
          </div>
        </div>
        <div className="container mx-auto flex px-10 py-4">
          <div className="flex h-96 w-1/2 flex-col items-start justify-center space-y-4">
            <h6 className="my-1 text-5xl font-bold text-black">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h6>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button className="rounded bg-green-400 p-2 font-medium text-white">
              {" "}
              Mulai Sewa Mobil
            </button>
          </div>
          <div className="w-1/2">
            <div className="absolute right-0">
              <Image
                src="/img-car.png"
                alt="Hero image"
                layout="fixed"
                width={704}
                height={407}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
