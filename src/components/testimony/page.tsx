/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export function TentangKami() {
  return (
    <div className="">
      <section className="relative isolate overflow-hidden bg-[#000000] px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-10" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#000000] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt=""
            src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
            className="mx-auto h-12 "
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold text-white sm:text-2xl/9">
              <p>
                “Sebelumnya perusahaan kami sangat kurang efisien, tidak seperti
                sekarang. proses pencarian client sangatlah sulit dan memakan
                banyak sumber daya, tetapi semuanya sudah tidak seperti dulu
                sejak kami menggunakan teknologi yang disediakan SIEMENS,
                semuanya menjadi mudah dan murah”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="mx-auto size-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">Judith Black</div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-white"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-white">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
