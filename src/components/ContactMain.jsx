import styles from "../styles/contact.module.css";
import { FaRegPaperPlane } from "react-icons/fa";
import { isValidContact } from "../assets/isValid/isValidContact" 
import { useState } from "react";

export function Contact() {

  //Para controlar el estado de los datos
  const [data, setData] = useState({
    name: '',
    mail: '',
    message: ''
  })

  /*Estados para mostrar u ocultar alertas en los elementos*/
  const [showAlertName, setShowAlertName] = useState(false);
  const [showAlertMail, setShowAlertMail] = useState(false);
  const [showAlertMessage, setShowAlertMessage] = useState(false);

  //Estados para los mensajes de las alertas
  const [messageName, setMessageName] = useState('');
  const [messageMail, setMessageMail] = useState('');
  const [messageMessage, setMessageMessage] = useState('');

  //Controlar el ingreso de datos
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  //Enviar el mensaje
  const sendMessaje = (event) => {
    event.preventDefault();       
    
    try {
      //Cambiar estado para ocultar todas las alertas
      setShowAlertName(false);
      setShowAlertMail(false);
      setShowAlertMessage(false);

      let validationData = isValidContact({name : data.name, mail: data.mail, message : data.message });
    
      if(validationData.IsValidExceptionMessage)
      {
        alert(validationData.exceptionMessage);
      }
      else if(validationData.isValidName && validationData.isValidMail && validationData.isValidMessage)
      {
        console.log(validationData);
      }
      else
      {
        //Cambiar estado y mensaje para mostras en las alertas
        if(!validationData.isValidName)
        {
          setMessageName(validationData.messageName);
          setShowAlertName(true);
        }

        if(!validationData.isValidMail)
        {
          setMessageMail(validationData.messageMail);
          setShowAlertMail(true);
        }

        if(!validationData.isValidMessage)
        {
          setMessageMessage(validationData.messageMessage);
          setShowAlertMessage(true);
        }
      }      

    } catch (error) {
      alert("Contact Error: " + error.message);
    }    
  }


  return (
    <>
      <section className={styles.ContactMain} id="Contact">
        <h1 className="Title">Contáctame</h1>
        <div className={styles.UnderlineTitle}></div>
        <form action="" method="post" onSubmit={sendMessaje}>
          <div className={styles.FormElement}>
            <div className={styles.FormName}>
              <input type="Text" placeholder="Nombre" name="name" onChange={handleInputChange}/>
              <p className={showAlertName ? styles.ShowAlert : styles.HideAlert}>{messageName}</p>
            </div>
            <div className={styles.FormMail}>
              <input type="Text" placeholder="Correo Electrónico" name="mail" onChange={handleInputChange}/>
              <p className={showAlertMail ? styles.ShowAlert : styles.HideAlert}>{messageMail}</p>
            </div>
            <div className={styles.FormMessage}>
              <textarea rows="6" wrap="soft" placeholder="Mensaje" name="message" onChange={handleInputChange}></textarea>
              <p className={showAlertMessage ? styles.ShowAlert : styles.HideAlert}>{messageMessage}</p>
            </div>
            <button type="submit" className={styles.FormBotton}>
              Enviar <FaRegPaperPlane className={styles.IconBotton}/>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
