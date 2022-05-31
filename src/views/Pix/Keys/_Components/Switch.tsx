import React, { useState } from "react";
export const Switch =(title,text)=>{

  const [content, setContent] = useState('')
  const [textValue, setTextValue] = useState('')



  return(

    switch (title) {
      case 'CPF':
        setContent(title);
        setTextValue(text);
        break;
      case 'Celular':
        setContent(title);
        setTextValue(text);
        break;
      case 'Chave Aleatória':
        setContent(title);
        setTextValue(text);
        break;
      case 'Email':
        setContent(title);
        setTextValue(text);
        break;

      default:
        break;
    }
  )
}
