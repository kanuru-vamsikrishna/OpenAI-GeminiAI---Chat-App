import React, { useEffect, useRef, useState } from 'react'
import { IKImage } from 'imagekitio-react';
import "./newPrompt.css"
import Upload from '../upload/Upload'

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_END_POINT;

const NewPrompt = () => {
  const endRef = useRef(null)

  const [image, setImage] = useState({
    isLoading: false,
    error: "",
    dbData: {}
  });

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <>
      {image.isLoading && <div>Loading...</div>}
      {image?.dbData?.filePath && (
        <IKImage
          urlEndpoint={urlEndpoint}
          path={image?.dbData?.filePath}
          width="200"
        />
      )}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <Upload setImage={setImage} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask me anything..." />
        <button>
          <img src="/arrow.png" alt="" /> 
        </button>
      </form>
    </>
  )
}

export default NewPrompt