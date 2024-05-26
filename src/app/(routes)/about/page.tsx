import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
  } from "@/components/ui/table";

export default function AboutPage() {
  return (
    <>
        <div className='w-[1100px]'>
            <Card style={{width: 1000, marginLeft: 270, backgroundColor: '#6A00F4'}}>
                <CardContent>
                    <div className="flex justify-center">
                        <Image src="/profile.jpg" alt='' width={300} height={300}/>
                    </div>
                    <Separator className='my-3'/>
                    <h1 className='text-xl my-2'>Description</h1>
                    <div className="flex justify-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis, nam dolor quis distinctio libero ipsa veritatis corrupti et voluptas itaque obcaecati sunt aut facilis omnis iusto magni atque, asperiores cupiditate explicabo iure possimus. Delectus non earum harum asperiores est temporibus exercitationem quae, quos, sequi unde eaque quasi? Perferendis ea, odio necessitatibus libero eum id, molestiae a quod recusandae dolore expedita est corporis temporibus nam odit fugiat sit. Nam impedit laudantium numquam. Illum vitae incidunt atque beatae sequi dolor! Tempore at mollitia perspiciatis, ipsa autem labore aspernatur fugit nobis. Eum iusto quo in laboriosam assumenda delectus aliquam? Eos, velit similique.
                    </div>
                    <Separator className='my-3'/>
                    <h1 className='text-xl my-2'>Education</h1>
                    <Table className="overflow-hidden">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Degree/Certificate</TableHead>
                                <TableHead>Institute/Board</TableHead>
                                <TableHead>CGPA/Percentage</TableHead>
                                <TableHead>CGPA/Percentage</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell> B.Tech. Mechanical Engineering</TableCell>
                                <TableCell>Indian Institute of Technology Indore</TableCell>
                                <TableCell>7.30 (Current)</TableCell>
                                <TableCell>2021-Present</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Senior Secondary</TableCell>
                                <TableCell>HSC Board</TableCell>
                                <TableCell> 89.67%</TableCell>
                                <TableCell>2021</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Secondary</TableCell>
                                <TableCell>ICSE Board</TableCell>
                                <TableCell> 91.8%</TableCell>
                                <TableCell> 2019</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Separator className='my-3'/>
                    <h1 className='text-xl my-2'>Achievements</h1>
                    <ol>
                        <li>8th Position: 11th Inter IIT TechMeet, IIT Kanpur</li>
                        <li>Max Rating-1372(Pupil): Codeforces</li>
                        <li>Max Rating-1719(3 star): Codechef Profile</li>
                        <li>JEE Adv: AIR 7132 among 41,862 qualified students</li>
                        <li>JEE Mains: 98.28 percentile in a pool of more than 9 lakh students</li>
                    </ol>
                    <Separator className='my-3'/>
                    <h1 className='text-xl my-2'>Technical Skills</h1>
                    <h2>Programming</h2>
                    <div className="flex">
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                            Python
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                            C++
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                            Data Structures and Algorithms
                        </div>
                    </div>
                    <h2>Machine Learning</h2>
                    <div className="flex">
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Pandas
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        NumPy
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Tensorflow
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Keras
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Scickit learn
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Opencv
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        SymPy
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Streamlit
                        </div>
                    </div>
                    <h2>Web Development</h2>
                    <div className="flex">
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        React Js
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Next Js
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Nest Js
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Django
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        HTML
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        CSS
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Bootstrap
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Javascript
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Typescript
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        AWS
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        Git/Github
                        </div>
                    </div>
                    <h2>Databases</h2>
                    <div className="flex">
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        MySQL
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        MongoDB
                        </div>
                        <div  className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{backgroundColor: '#DB00B6'}}>
                        PostgreSQL
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </>
  )
}
