"use client"
import React from "react";
import { useState } from 'react';
import AlertDialog from './AlertDialog';

export default function Page() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <main className="flex items-center justify-center ">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
            Referral program
          </h1>
          <p className="text-md my-5 ">
            Do you know any international student with a Bachelor or master
            degree that would like to study in the United States?
          </p>
          <p className="text-md my-5 ">
            Refer an international student that would like to study a master or
            PhD degree on a fully funded scholarship at one of our prestigious
            partner university in the Maryland, United States and receive a
            generous referral payment for each international student that has
            enrolled to study a masters or PhD degree program at one of our
            partner universities.
          </p>
        </article>
        {/* <button onClick={openDialog}  className="h-fit w-fit rounded-md bg-red-500 px-3 py-2 text-lg uppercase text-white">
          Portal
        </button> */}
        <AlertDialog isOpen={isDialogOpen} onClose={closeDialog} />
      </section>
    </main>
  );
}
