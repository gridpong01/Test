function CardPeople({ item }) {
  return (
    <div class="flex items-center justify-center">
      <div class="rounded-3xl shadow-lg bg-white overflow-hidden w-72 hover:shadow-2xl">
        <img
          class="h-28 w-full rounded-2xl static"
          src="/cat.jpg"
          alt="Banner"
        />
        <img
          class="-mt-11 ml-5 h-20 w-20 rounded-full absolute shadow-lg"
          src="/catprofile.jpg"
          alt="Profile"
        />

        <div class="p-5 pt-11">
          <p class="text-lg text-gray-800 font-bold">
            {item.first_name} {item.last_name}{" "}
          </p>
          <div class="flex gap-3">
            <p class="text-gray-600  mt-2"> Daisy </p>
            <p class="text-cyan-500 mt-2">( {item.job} )</p>
          </div>
          <hr class="mt-2 w-full" />

          <div class="grid gap-4 grid-cols-5 mt-3 h-10">
            <p class="text-sm text-gray-600 col-span-2 mt-2"> Email </p>
            <p class="text-sm break-all text-gray-600 col-span-3 mt-2">
              {item.email}
            </p>
          </div>

          <div class="grid gap-4 grid-cols-5 mt-3">
            <p class="text-sm text-gray-600 col-span-2  mt-2"> Start date </p>
            <p class="text-sm text-gray-600 col-span-3 font-semibold mt-2">
              {" "}
              {item.date.replace(/-/g, " ")}{" "}
            </p>
          </div>
          <hr class="mt-6 w-full" />

          <div class="flex flex-col gap-2 mt-3">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-1 stroke stroke-gray-500 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <p class="text-sm text-gray-500 mb-2"> Guild </p>
            </div>
          </div>
          <div class="flex w-full">
            <div class="flex flex-col-3 gap-2">
              <div>
                <button class="bg-transparent hover:bg-amber-400 text-sm text-amber-400 font-semibold hover:text-white m-auto py-1 px-2 border border-amber-400 hover:border-transparent rounded-xl">
                  Adobe Figma CC
                </button>
              </div>

              <div>
                <button class="bg-transparent hover:bg-amber-400 text-amber-400 text-sm font-semibold hover:text-white m-auto py-1 px-2 border border-amber-400 hover:border-transparent rounded-xl">
                  UX/UI
                </button>
              </div>
              <div>
                <button class="bg-transparent hover:bg-amber-400 text-amber-400 text-sm font-semibold hover:text-white m-auto py-1 px-2 border border-amber-400 hover:border-transparent rounded-xl">
                  ...
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2 pt-3">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-1 stroke stroke-gray-500 w-5 h-5 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>

              <p class="text-sm text-gray-500 mb-1"> Tag </p>
            </div>
            <div class="flex flex-col-3 gap-3">
              <span class="inline-block bg-sky-100 rounded-xl px-2 py-1 text-sm font-semibold text-red-600">
                #Eat
              </span>
              <span class="inline-block bg-sky-100 rounded-xl px-2 py-1 text-sm font-semibold text-red-600">
                #Travel
              </span>
              <span class="inline-block bg-sky-100 rounded-xl px-2 py-1 text-sm font-semibold text-red-600">
                #Sport
              </span>
              <span class="inline-block bg-sky-100 rounded-xl px-2 py-1 text-sm font-semibold text-red-600">
                ...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPeople;
