import { useState } from "react";
import Head from "next/head";
import Bars from "@components/Bars";

function Addcars() {
  return (
    <>
      <Head>
        <title>Add Cars &mdash; Binar Car Rental</title>
      </Head>
      <Bars>
        <h1 className="text-xl font-medium">Add New Car</h1>
        <div>
          <form className="mt-4 flex h-[450px] w-[1100px] space-y-4 rounded-sm bg-white p-4">
            <div className="flex w-[15%] flex-col space-y-10 p-4 ">
              <label htmlFor="Nama">Nama</label>
              <label htmlFor="Harga">Harga</label>
              <label htmlFor="Foto">Foto</label>
              <label htmlFor="Start">Start Rent</label>
              <label htmlFor="Finish ">Finish Rent</label>
              <label htmlFor="Created ">Created At</label>
              <label htmlFor="Updated">Updated At</label>
            </div>
            <div className="flex w-[85%] flex-col space-y-4">
              <input
                type="text"
                name="nama"
                id="nama"
                placeholder="Nama"
                className="ml-36 w-[339px] rounded-sm border border-slate-300 py-2 px-3"
                onChange={(e) =>
                  setForm({
                    ...form,
                    nama: e.target.value,
                  })
                }
              />
              <input
                type="number"
                name="harga"
                id="harga"
                placeholder="Harga"
                className="ml-36 w-[339px] rounded-sm border border-slate-300 py-2 px-3"
                onChange={(e) =>
                  setForm({
                    ...form,
                    harga: e.target.value,
                  })
                }
              />
              <input
                type="file"
                name="foto"
                id="foto"
                placeholder="Foto"
                className="ml-36 w-[339px] rounded-sm border border-slate-300 bg-[url('/fi-upload.png')] bg-right bg-no-repeat bg-origin-content py-2 px-3"
                onChange={(e) =>
                  setForm({
                    ...form,
                    foto: e.target.files,
                  })
                }
              />
              <span className="ml-36 text-xs text-slate-300">
                File size max. 2MB
              </span>
            </div>
          </form>
          <div className="mt-36">
            <button className="mr-4 rounded-sm border border-dark-blue-04 bg-white px-3 py-2 font-bold text-dark-blue-04">
              Cancel
            </button>
            <button
              className="rounded-sm border bg-dark-blue-04 px-3 py-2 font-bold text-white"
              onClick={() => {
                handleSubmit();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Bars>
    </>
  );
}
export default Addcars;
