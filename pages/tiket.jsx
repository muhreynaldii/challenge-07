import Container from "@components/Container";
import Image from "next/image";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

function Tiket() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  return (
    <>
      <section className="h-[166px] w-full bg-slate-200">
        <Container>
          <div className="flex items-center py-4">
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
        </Container>
      </section>
      <div
        className="flex flex-col items-center justify-center py-10
      "
      >
        <Image
          src="/fi-check.png"
          alt="icon check"
          layout="fixed"
          width={48}
          height={48}
        />
        <h1 className="py-4 text-center text-sm font-bold">
          Pembayaran Berhasil!
        </h1>
        <p className="text-center text-sm text-slate-500">
          Tunjukkan invoice ini ke petugas BCR di titik temu.
        </p>
      </div>
      <div className="mx-auto mb-10 w-3/4 rounded-lg bg-white p-6 shadow sm:w-[605px]">
        <div className="flex justify-between">
          <h1 className="text-sm font-bold">Invoice</h1>
          <Download>
            {(RenderDownloadProps) => (
              <button
                className="flex w-[97px] items-center justify-center rounded-sm border border-dark-blue-04 py-2 px-3 font-bold text-dark-blue-04"
                onClick={RenderDownloadProps.onClick}
              >
                <i className="h-full w-full bg-[url('/fi-download.png')] bg-left bg-no-repeat bg-origin-content"></i>
                Unduh
              </button>
            )}
          </Download>
        </div>
        <div className="h-full w-full py-6">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
            <Viewer
              fileUrl="/pdf/document.pdf"
              plugins={[defaultLayoutPluginInstance, getFilePluginInstance]}
            />
          </Worker>
        </div>
      </div>
    </>
  );
}

export default Tiket;
