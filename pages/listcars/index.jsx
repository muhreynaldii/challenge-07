import Head from "next/head";
import Bars from "@components/Bars";
import Link from "next/link";
import Image from "next/image";
import Card from "@components/Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearch } from "@redux/action/searchAction";

function Listcars() {
  const dispatch = useDispatch();
  const { isLoading, data: searchData } = useSelector(
    (state) => state.searchData
  );

  useEffect(() => {
    dispatch(getSearch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex flex-wrap justify-start">
              {searchData?.map((item) => {
                return (
                  <div className="m-2" key={item.id}>
                    <Card
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Bars>
    </>
  );
}
export default Listcars;
