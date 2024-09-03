import Link from 'next/link'
import Image from 'next/image'
import homeImg from "/public/home.jpg";
import Hero from '@/components/hero';

export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt='car facotry' title='Professional Cloud Hosting' />
  );
}
