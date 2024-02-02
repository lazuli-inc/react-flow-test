'use client';

import FlowToo from 'components/FlowToo';
import { SideBar } from 'components/Sidebar';
import React, { useState } from 'react';
import DialogComponent from 'components/DialogComponent';

export default function Home() {

  return (
    // <main className={styles.main}>
    <div>
      <SideBar />
      <FlowToo />
  
    </div>
    // </main>
  );
}
