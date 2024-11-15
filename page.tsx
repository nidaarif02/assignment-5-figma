import Header from "./component/heading";
import image from "../../public/Figma.jpg";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>\
      <Header />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rye&display=swap" />
      
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start w-[496px] h-[189px] mt-[116px] ml-[176px] mt-[216px]">
         <h1 className="main w-[902px] font-[Rye]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
         <p className="pra w-[902px] h-[147px] md:text-[30px] leading-[49.35px] font-medium p-2">
          An example of intricate workmanship and detail, elegant <br></br>{""}
          necklace and long and short chains from a part of our <br></br>
          desirable collection.
         </p>

         <button className="bg-[#A29875] text-[#FFFFFF] h-[58px] p-2 m-2 font-[Rye]  md:text[30px] font-medium items-center border-1 rounded-md mt-[20px]">Explore Now</button>
        </div>

        <div className="w-1/2 flex">
        <Image src={image} alt="image" width={490} height={667} className="w-[442px] h-[611px] mt-[20px] ml-[350px] rounded-tl-[150px] rounded-br-[150px] m-[15px] p-2 border-[5px] border-[#A29875] opacity-0px gap-0px"></Image>

        </div>
      </div>
    </div>
  )
}
export default Home
