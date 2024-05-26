import React from 'react';
import Image from 'next/image';

export default function SangeetPage() {
  return (
    <div className='flex flex-wrap mx-10'>
      <div className="flex justify-center space-x-4 my-3">
        <Image src="/tpc/1.png" alt='' width={450} height={300}/>
        <Image src="/tpc/2.png" alt='' width={450} height={300}/>
        <Image src="/tpc/3.png" alt='' width={450} height={300}/>
      </div>
      <div className="flex justify-center space-x-4 my-3">
        <Image src="/tpc/4.png" alt='' width={450} height={300}/>
        <Image src="/tpc/5.png" alt='' width={450} height={300}/>
      </div>
    </div>
  );
}
