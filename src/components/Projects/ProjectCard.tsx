/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import Image, { StaticImageData } from 'next/image';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import sg from '../../../public/sangeet/1.png'
import cp from '../../../public/cp-portal/1.png'
import tpc from '../../../public/tpc/1.png'
import mt from '../../../public/market-trends/1.png'
import mes from '../../../public/math-equation-solver/1.png'

interface ProjectCardProps {
  projectName: string;
  description: string[];
  techStacks: string[];
  imageUrls: string[];
  github: string;
  weburl: string;
  redirecturl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, description, techStacks, imageUrls, github, weburl, redirecturl }) => {
  const [expanded, setExpanded] = useState(false);
  const [img, setimg] = useState<StaticImageData>(sg);
  const [r,setr] = useState<string>("");

  useEffect(()=>{
    if(projectName==="Sangeet"){
        setimg(sg);
        setr("sangeet")
    }
    if(projectName==="TPC Portal"){
        setimg(tpc);
        setr("tpc")
    }
    if(projectName==="Market Trends"){
        setimg(mt);
        setr("mt")
    }
    if(projectName==="Cp-Portal"){
        setimg(cp);
        setr("cp")
    }
    if(projectName==="Math Equation Solver"){
        setimg(mes);
        setr("mes")
    }
  }, [projectName])

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card style={{ width: 750, marginLeft: 380, backgroundColor: '#6A00F4' }}>
        <CardContent>
          <div className="flex">
            <div>
              <Image onClick={toggleExpanded} className='cursor-pointer' src={img} alt="" width={800} height={600} />
              <Separator className='my-3' />
              <CardTitle>{projectName}</CardTitle>
              {expanded && (
                <>
                  <ol>
                    {description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ol>
                  <Separator className='my-3' />
                  <h1 className="text-xl">Tech Stacks</h1>
                  <div className="flex">
                    {techStacks.map((tech, index) => (
                      <div key={index} className="mx-2 p-2 !text-md rounded-full my-2 text-white font-medium" style={{ backgroundColor: '#DB00B6' }}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <Separator orientation='vertical' style={{ backgroundColor: 'black' }} />
            <div>
              <Link href={github} target='_blank'>
                <img src="/github.svg" alt="Github Icon" width="48" height="48" className='mb-4' />
              </Link>
              <Link href={weburl} target='_blank'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABs0lEQVR4nO2Zy0rDQBSGv8S9Wry8g/okoohiu7EVN75A7cLtuBORdqVIqc8j6DtU3QvqzrpRKhGGoZnJZJjmLPLD2Z1Mvj/nJJkL1JKtBtAEzoBzz+gAiWXsFDiJMO6f1oEh8A38BETbco/TSOOyBbwGgsc2oGxP3oR/APrApWccOUq9ABw7xrgC3n0MDLWk6YXbVKcUGPlUoGH0vDT4N5eBptE2kuBHwIXLQE9LuEYWfJpBWw04EyIrAW4N+PsMHukGEge8aANJAXixBpKC8CIN+MCLM+ALL8qA7VNpU8c1x5qHgbLw/1Vr2+ZYsQ2UaRsvxTQQHT6mgSSgbUQYaM0DPqaBw3nAx34HWgVWaMGqejbqUpr9C3J3JaQb6Ej4kYVISZlKlJWqDVQsVVegYqm6AhVL1RWoWKqugPQK9ARs7trU1/imZ3bWhUeV2+t5etL49mclLBsHHDvI0Z7G9QUs5iXeaYkfwC4y4D81rhtb8hrwYizCH4FBifPc0BgYbTONMbDicrwJPBsXSogxsFG0bKvZRtREAPgkaxvnk5+lJeAA6JY4Jw6Nbnbv3Be2FgL0CwOd3r87qP0DAAAAAElFTkSuQmCC" alt="Share Icon" width="32" height="32" className='mx-1 mb-4' />
              </Link>
              <Link href={`/images/${r}`} target='_blank'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8klEQVR4nO2YsUoDQRCGPyKmUXyBWKqtqTRWdnZiUBMrQcTWSvARRI2N+goSkODzGIl2lgrGCBoUTxbmICxnbnfNuRdyPwwcdzN7/783M7u3kCFDhkFgHwgs7ZCUYBv4dhCgYvZ8k18FPh3Ih/YFVHyRXwbe/0A+tC6wMmhy00ADeLWczbLB2GuWX+0VuAFmbcg/O+TzrsUE7TjUzTNQMBm88U8d5cDhPdcmA9ukjbIa7jiyfNeLyaB6kG8EtnxGWkAe2ALqQBN4E2vKvar4pFLABvBgkMf3wHqaBIwBZw4dRRV/Lg0CXMiHduJbwEaE/wdwDiwCE2Lq+kKe6f5lXwLyETn/CMz3iSmKT29MK6awExOwFTHz/cj3itC/RMWHgLrmp9LGFJda7JUPAXea34KFgJIW2/QhoKP5TVoImNRiO8MmYEqLbfsQMPQpVNf8VJ8fqiKuRrRR1SLjUJT/4N7YTR8C8rIx0xeyosNCNu5DALKr1P27kiIlKWxlS3JPn/lAfvIHxccpoBYRY2rHCfCxDlBb4lPHnWguDQJClCWf44i3DNLGiwCkGCvSFm9lsevI9ZV0m34F611AEghGTkD7D10laXsxEXCTAqLBL6aOPWMxBzylgGwQcbg7gyEKcpCahnRqy8wbk8+QIUOGDKODH7J5xNpUQryiAAAAAElFTkSuQmCC" alt="Share Icon" width="32" height="32" className='mx-1 mb-4' />
              </Link>
              <Link href={redirecturl} target='_blank'>
                <img src="/document.svg" alt="Document Icon" width="38" height="38" className='mb-4 mx-0.5' />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
