import Image from 'next/image';

export default function Logo() {
    return (
      <div className="bg-white py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-2 flex md:items-center flex-wrap justify-center">
            <Image
              className=" max-h-12 w-auto object-contain lg:col-span-1"
              src="/images/tink.svg"
              alt="Tink"
              width={158}
              height={48}
            />
            <Image
              className=" max-h-12 w-auto object-contain lg:col-span-1"
              src="/images/puli.svg"
              alt="Puli"
              width={158}
              height={48}
            />
            <Image
              className=" max-h-12 w-auto object-contain lg:col-span-1"
              src="/images/tiktok.svg"
              alt="TikTok"
              width={158}
              height={48}
            />
            <Image
              className=" max-h-12 w-auto object-contain sm:col-start-2 lg:col-span-1"
              src="/images/splabs.svg"
              alt="SPLabs"
              width={158}
              height={48}
            />
            <Image
              className=" max-h-12 w-auto object-contain lg:col-span-1"
              src="/images/puli.svg"
              alt="Puli"
              width={158}
              height={48}
            />
            <Image
              className="max-h-12 w-auto object-contain sm:col-start-auto lg:col-span-1"
              src="/images/spotify.png"
              alt="Spotify"
              width={158}
              height={48}
            />
            <Image
              className=" max-h-12 w-auto object-contain lg:col-span-1"
              src="/images/spark.svg"
              alt="Spark"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  