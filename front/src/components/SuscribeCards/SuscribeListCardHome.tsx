"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { ISuscribe } from "@/interfaces/interfacesSupscriptions";
import Link from "next/link";

const SuscribeCardListHome = ({
  suscribe: { title, price, unid, describe },
}: {
  suscribe: ISuscribe;
}) => {
  return (
    <div className="box-item">
      <div className="flip-box ">
        {/* Front Side */}
        <div
          className="flip-box-front text-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1429991889170-afd56b2a1210?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhcm18ZW58MHx8MHx8fDA%3D')",
          }}
        >
          <div className="inner text-gray-50 border-2 border-white ">
            <h3 className="poppins-bold-italic text-4xl mb-14">{title}</h3>
            <p className="poppins-bold text-6xl">{`$${price}`}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="flip-box-back text-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1481555716071-8830d3e254ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZhcm18ZW58MHx8MHx8fDA%3D')",
          }}
        >
          <div className="inner text-gray-50 ">
            <h3 className="poppins-bold text-2xl">{title}</h3>
            <p className="poppins-regular text-xl">{describe}</p>
            <Link href={`/login`}>
              <button className="flip-box-button">Suscribite</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuscribeCardListHome;
