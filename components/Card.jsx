import React from "react";
import Link from "next/link";
import Image from "next/image";

function Card({ id, name, image, price }) {
  return (
    <div className="h-[482px] w-[351px] rounded-lg border bg-white p-6">
      <div className="p-4">
        <Link href={`/detailcars/${id}`}>
          <a>
            <Image
              src={image}
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
      <p className="font-sm pt-4">{name}</p>
      <p className="font-base pt-2 font-bold">{price}</p>
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
  );
}

export default Card;
