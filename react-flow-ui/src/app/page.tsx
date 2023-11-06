'use client';

import FlowToo from 'app/components/FlowToo';
import { SideBar } from 'app/components/Sidebar';
import React from 'react';



export default function Home() {
  return (
    // <main className={styles.main}>
    <div>
      <SideBar/>
      <FlowToo />
    </div>
    // </main>
  );
}
