import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialCard() {
  return (
    <>
     <Card style={{ width: 300, marginLeft: 380, backgroundColor: '#6A00F4' }}>
        <CardContent className='flex justify-center cursor-pointer'>
          <Link href="https://github.com/AryanGKulkarni" target='_blank'> 
            <Image src="/social/github.svg" alt='' width={144} height={144}/>
          </Link>
        </CardContent>
     </Card>
    </>
  )
}
