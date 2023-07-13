"use client";
import { photos } from "./data/photos";
import { PhotoItem } from "./components/PhotoItem";
import { useState } from "react";
import { Modal } from "./components/Modal";




function Page() {

  const [showModal,  setShowModal] = useState(false);
  const [imageOfModal,  setImageOfModal] = useState('');

  const openModal = (id:number) => {
    const photo = photos.find(item => item.id === id )
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }



  return (
    <div className="mx-2">
      <h1 className="text-3xl text-center my-10 font-bold"> Fotos intergaláticas</h1>
      <section className="container max-w-5xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {photos.map((item) =>
        <PhotoItem
          key={item.id}
          photo={item}
          abrir={() => openModal(item.id)}
         />
      )}

      </section>
      {showModal && <Modal image={imageOfModal} fechar={closeModal} />}


    </div>
  );
}
export default Page;
