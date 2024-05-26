import SocialCard from '@/components/Social/SocialCard'
import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      <div className='grid grid-cols-2 gap-4' style={{height: 70}}>
        <Card style={{ width: 300, marginLeft: 450, backgroundColor: '#B100E8', height: 50, marginTop: 10 }}>
            <CardContent className='mx-5 p-2'>
              <CardTitle>me210003016@iiti.ac.in</CardTitle>
            </CardContent>
        </Card>
        <Card style={{ width: 300, backgroundColor: '#B100E8', height: 50, marginTop: 10 }}>
            <CardContent className='mx-10 p-2'>
              <CardTitle>+91 9881317549</CardTitle>
            </CardContent>
        </Card>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <Card style={{ width: 300, marginLeft: 450, backgroundColor: '#B100E8' }}>
            <CardContent className='flex justify-center cursor-pointer'>
              <Link href="https://github.com/AryanGKulkarni" target='_blank'> 
                <Image src="/social/github.svg" alt='' width={144} height={144}/>
              </Link>
            </CardContent>
        </Card>
        <Card style={{ width: 300, backgroundColor: '#B100E8' }}>
            <CardContent className='flex justify-center cursor-pointer'>
              <Link href="https://www.linkedin.com/in/aryan-kulkarni-5b2182231/" target='_blank'> 
                <Image src="/social/linkedin.svg" alt='' width={144} height={144}/>
              </Link>
            </CardContent>
        </Card>
        <Card style={{ width: 300, marginLeft: 450, backgroundColor: '#B100E8' }}>
            <CardContent className='flex justify-center cursor-pointer'>
              <Link href="https://x.com/aryan10761" target='_blank'> 
                <Image src="/social/twitter.svg" alt='' width={144} height={144}/>
              </Link>
            </CardContent>
        </Card>
        <Card style={{ width: 300, backgroundColor: '#B100E8' }}>
            <CardContent className='flex justify-center cursor-pointer'>
              <Link href="https://www.instagram.com/aryankulkarni965/" target='_blank'> 
                <Image src="/social/instagram.svg" alt='' width={144} height={144}/>
              </Link>
            </CardContent>
        </Card>
        <Card style={{ width: 300, marginLeft: 450, backgroundColor: '#B100E8' }}>
            <CardContent className='flex justify-center cursor-pointer'>
              <Link href="https://codeforces.com/profile/AK2507" target='_blank'> 
                <Image src="/social/codeforces.png" alt='' width={144} height={144}/>
              </Link>
            </CardContent>
        </Card>
        <Card style={{ width: 300, backgroundColor: '#B100E8' }}>
            <CardContent className='flex justify-center cursor-pointer'>
              <Link href="https://www.codechef.com/users/aryan_kulkarni" target='_blank'> 
                <Image src="/social/codechef.svg" alt='' width={144} height={144}/>
              </Link>
            </CardContent>
        </Card>
      </div>
    </>
  )
}
