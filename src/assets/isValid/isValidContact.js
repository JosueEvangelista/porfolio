export function isValidContact({name, mail, message})
{
    let arrayReturn = {
        'messageName' : 'ok',
        'isValidName' : true,
        'messageMail' : 'ok',
        'isValidMail' : true,
        'messageMessage' : 'ok',
        'isValidMessage' : true,
        'exceptionMessage' : '',
        'IsValidExceptionMessage' : false
    };

    try {
        
        //Validar que no vaya vacio ni nulo
        if(name === "" || name.length <= 0)
        {
            arrayReturn.isValidName = false;
            arrayReturn.messageName = "Ingrese su nombre.";
        }

        if(mail.length <= 0 || mail === "")
        {
            arrayReturn.isValidMail = false;
            arrayReturn.messageMail = "Ingrese su correo electrónico.";
        }

        if(message.length <= 0 || message === "")
        {
            arrayReturn.isValidMessage = false;
            arrayReturn.messageMessage = "Ingrese su mensaje.";
        }

        //Validar que sean solo letras el nombre
        if(arrayReturn.isValidName)
        {        
            let nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
            
            if(!nameRegex.test(name.toLowerCase()))
            {
                arrayReturn.isValidName = false;
                arrayReturn.messageName = "Ingrese un nombre valido (Solo debe contener letras).";
            }
        }

        //Validar la longitud de los valores
        if(arrayReturn.isValidName || arrayReturn.isValidMail || arrayReturn.isValidMessage)
        {
            let lengthName = 50;
            let lengthMail = 50;
            let lengthMessage = 16777215;

            if(arrayReturn.isValidName)
            {
                if(name.length > lengthName)
                {
                    arrayReturn.isValidName = false;
                    arrayReturn.messageName = "Nombre con demaciados carácteres, debe contener menos de " + lengthName + " carácteres.";
                }
            }

            if(arrayReturn.isValidMail)
            {
                if(mail.length > lengthMail)
                {
                    arrayReturn.isValidMail = false;
                    arrayReturn.messageMail = "Correo con demaciados carácteres, debe contener menos de " + lengthMail + " carácteres.";
                }
            }

            if(arrayReturn.isValidMessage)
            {
                if(message.length > lengthMessage)
                {
                    arrayReturn.isValidMessage = false;
                    arrayReturn.messageMessage = "Mensaje con demaciados carácteres, debe contener menos de " + lengthMessage + " carácteres.";
                }
            }
        }

        //Validar el correo
        if(arrayReturn.isValidMail)
        {
            let mailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            
            if(!mailRegex.test(mail))
            {
                arrayReturn.isValidMail = false;
                arrayReturn.messageMail = "Ingrese un correo electrónico valido.";
            }
        }

        return arrayReturn;

    } catch (error) {
        arrayReturn.exceptionMessage = "isValid Error: " + error.message;
        arrayReturn.IsValidExceptionMessage = true;
        return arrayReturn;
    }
}