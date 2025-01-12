import { TMessageData } from "../../domain/types/messageDataType";

export const messagesMock:TMessageData[] = [
    {    
        from:{
            _id: 534523234234,
            username: 'Proceso de seleccion',
            profileImage: 'https://',
            isOnline: true,
            backgroundColor: "#465123"
        },
        messages:[
            {
                from: 'remitent',
                message: 'Hola Carlos, como estas?'
            },
            {
                from: 'self',
                message: 'Hola, todo bien. Y usted?'
            },
            {
                from: 'remitent',
                message: 'Todo bien, que nos cuentas?'
            },
            {
                from: 'remitent',
                message: 'Como te ha ido en la realizacion de nuestra prueba tecnica?'
            },
            {
                from: 'self',
                message: `Bueno, esta es la solucion al ejercicio planteado en la prueba tecnica, espero que resulte de su agrado.
                          Para darle solucion, me ajuste lo mas posible al stack propuesto, implementando buenas practicas de programacion
                          como los principios SOLID, la carga diferida de componentes, el one way flow propuesto por react, la aplicacion de
                          composicion en la realizacion de los componentes priorizando la reutilizacion de los mismos, git flow y asegurando
                          la calidad del codigo mediante testing. Disculpen que el tiempo no me alcanzo, deseaba agregar funcionalidad real 
                          mediante un servidor escrito con nodejs/express y agregar real time features para 
                          el chat. Queda pendiente eso... ;). Si tienen alguna duda, por favor, pregunten sin problemas`
            },
            {
                from: 'remitent',
                message: 'Vale, muchas gracias, lo revisaremos y te comentamos :)'
            },
            {
                from: 'self',
                message: 'Gracias a ustedes por la oportunidad'
            },
            {
                from: 'self',
                message: 'Quedo a la espera de respuesta, saludos'
            },

        ]
    }

]