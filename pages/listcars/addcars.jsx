import { useEffect } from "react";
import Head from "next/head";
import Bars from "@components/Bars";
import { getPost, postCars } from "@redux/action/searchAction";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

function Addcars() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { isLoading, data: searchData } = useSelector(
    (state) => state.searchData
  );

  const onSubmit = async (payload) => {
    const formData = new FormData();
    for (let key in payload) {
      formData.append(key, payload[key]);
    }
    formData.append("image", payload.image[0]);
    dispatch(postCars(formData));
  };

  useEffect(() => {
    dispatch(getPost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Add Cars &mdash; Binar Car Rental</title>
      </Head>
      <Bars>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl font-medium">Add New Car</h1>
          <div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="mt-4 flex h-[450px] w-[1100px] space-y-4 rounded-sm bg-white p-4">
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
                    name="name"
                    id="name"
                    placeholder="Nama"
                    className="ml-36 w-[339px] rounded-sm border border-slate-300 py-2 px-3"
                    {...register("name")}
                  />
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Harga"
                    className="ml-36 w-[339px] rounded-sm border border-slate-300 py-2 px-3"
                    {...register("price")}
                  />
                  <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Foto"
                    className="ml-36 w-[339px] rounded-sm border border-slate-300 bg-[url('/fi-upload.png')] bg-right bg-no-repeat bg-origin-content py-2 px-3"
                    onChange={onSubmit}
                    {...register("image")}
                  />
                  <span className="ml-36 text-xs text-slate-300">
                    File size max. 2MB
                  </span>
                </div>
              </div>
            )}
            <div className="mt-36">
              <button className="mr-4 rounded-sm border border-dark-blue-04 bg-white px-3 py-2 font-bold text-dark-blue-04">
                Cancel
              </button>
              <button
                className="rounded-sm border bg-dark-blue-04 px-3 py-2 font-bold text-white"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Bars>
    </>
  );
}
export default Addcars;
