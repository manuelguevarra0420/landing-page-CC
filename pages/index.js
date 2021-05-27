import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation';
import Units from '../components/Units';


export default function Home() {

	const [home, setHome] = useState('home')
	
  return (
    <React.Fragment>
      <Head>
      <title>Landing Page for Create Circus</title>
      </Head>
      <Navigation home={home}/>
      <Units />
    </React.Fragment>    
  )
}
