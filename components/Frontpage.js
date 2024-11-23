import Image from 'next/image';
import { useEffect } from 'react';

const words = ["One Stop Defination to all wood furniture You Need ...."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 200);
}

function Frontpage() {
  useEffect(() => {
    type();
  }, []);

  return (
    <div className="w-full flex flex-row">
      <div className="w-full h-screen bg-[url('/homeimg1.png')] bg-cover flex flex-col  justify-center items-center">
      <h1 className="text-white font-bokor font-bold text-8xl hover:text-6xl  transition ease-out duration-500">Wood World </h1>
      {/* <h1 className="text-white font-bokor font-bold text-3xl">One Stop Defination to all wood furniture You Need . </h1> */}
        <h1 id="typewriter" className="text-3xl text-white "></h1>
        {/* <Image
          src="/homeimg.png"
          width={500}
          height={500}
          alt="Picture of the author"
        /> */}
      </div>
      {/* <div className='bg-[#c5e5c3]'> wood work </div> */}
    </div>
  );
}

export default Frontpage;
