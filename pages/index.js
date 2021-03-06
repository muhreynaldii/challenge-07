import Image from "next/image";
import Head from "next/head";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Container from "@components/Container";
import Link from "next/link";

// @refresh reset

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Avanza", "Innova", "CRV", "CRETA", "Fortuner"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home &mdash; Binar Car Rental</title>
      </Head>
      <section className="h-full w-full bg-dark-blue-01 md:h-[500px]">
        <Container>
          <div className="mx-auto flex items-center py-4">
            <div className="w-3/5 pl-2 md:pl-0">
              <Image
                src="/logo-biru.png"
                alt="logo biru"
                layout="fixed"
                width={100}
                height={34}
              />
            </div>
            <div className="hidden md:flex md:w-2/5">
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
          <div className="mx-auto block py-4 md:flex">
            <div className="flex h-96 w-full flex-col items-center justify-center space-y-4 p-2 md:items-start md:p-0 xl:w-1/2">
              <h6 className="my-1 text-center text-2xl font-bold text-black md:text-left md:text-4xl">
                Sewa & Rental Mobil Terbaik di kawasan Bandung
              </h6>
              <p className="text-center md:text-left">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link href="/listcars">
                <a>
                  <button className="rounded bg-green-400 p-2 font-medium text-white">
                    {" "}
                    Mulai Sewa Mobil
                  </button>
                </a>
              </Link>
            </div>
            <div className="w-full xl:w-1/2">
              <div className="block xl:absolute xl:right-0">
                <Image
                  src="/img-car.png"
                  alt="Hero image"
                  layout="intrinsic"
                  width={704}
                  height={407}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="container mx-auto block w-full py-24 lg:flex">
        <div className="flex w-full justify-center lg:w-3/5">
          <Image
            src="/img-service.png"
            alt="service image"
            layout="fixed"
            width={459}
            height={428}
          />
        </div>
        <div className="w-full lg:w-2/5">
          <h1 className="text-2xl">
            Best Car Rental for any kind of trip in Bandung!
          </h1>
          <p className="mt-6 mb-4">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center">
              <Image
                src="/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
            </li>
            <li className="flex items-center">
              <Image
                src="/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
            </li>
            <li className="flex items-center">
              <Image
                src="/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Sewa Mobil Jangka Panjang Bulanan
              </p>
            </li>
            <li className="flex items-center">
              <Image
                src="/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Gratis Antar - Jemput Mobil di Bandara
              </p>
            </li>
            <li className="flex items-center">
              <Image
                src="/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Layanan Airport Transfer / Drop In Out
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto h-96">
        <h1 className="text-2xl font-bold">Why Us?</h1>
        <p className="pt-4 text-sm">Mengapa harus pilih Binar Car Rental?</p>
        <div className="block pt-10 md:mb-0 md:flex md:space-x-6">
          <div className="m-2 w-full rounded-lg border border-gray-400 p-4 md:w-1/4">
            <Image
              src="/icon-complete.png"
              alt="complete icon"
              layout="fixed"
              width={32}
              height={32}
            />
            <h1 className="pt-4 text-base font-bold">Mobil Lengkap</h1>
            <p className="py-4 text-sm">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="m-2 w-full rounded-lg border border-gray-400 p-4 md:w-1/4">
            <Image
              src="/icon-price.png"
              alt="price icon"
              layout="fixed"
              width={32}
              height={32}
            />
            <h1 className="pt-4 text-base font-bold">Harga Murah</h1>
            <p className="py-4 text-sm">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="m-2 w-full rounded-lg border border-gray-400 p-4 md:w-1/4">
            <Image
              src="/icon-24hrs.png"
              alt="24hrs icon"
              layout="fixed"
              width={32}
              height={32}
            />
            <h1 className="pt-4 text-base font-bold">Layanan 24 Jam</h1>
            <p className="py-4 text-sm">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="m-2 w-full rounded-lg border border-gray-400 p-4 md:w-1/4">
            <Image
              src="/icon-professional.png"
              alt="professional icon"
              layout="fixed"
              width={32}
              height={32}
            />
            <h1 className="pt-4 text-base font-bold">Professional</h1>
            <p className="py-4 text-sm">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-28 flex h-3/4 w-3/4 items-center justify-center md:mt-24 md:w-1/2 lg:w-1/4">
        <div className="mt-96 md:mt-0">
          <h1 className="text-center text-2xl font-bold">
            Chart Mobil Terjual
          </h1>
          <Pie data={data} />
        </div>
      </section>
      <section className="my-32 md:my-24">
        <Container>
          <h1 className="pb-4 text-center text-2xl font-bold">Testimonial</h1>
          <p className="text-center text-sm">
            Berbagai review positif dari para pelanggan kami
          </p>
        </Container>
      </section>
    </>
  );
}
