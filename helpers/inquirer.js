import inquirer from 'inquirer';
import 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tareas(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
            
        ]
    }
]

export async function inquirerMenu(){
    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opcion'.green);
    console.log('=======================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

export async function pausa(){

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `presione ${'enter'.green} para continuar`

        }
    ];

    console.log('\n');
  
    const { opcion } = await inquirer.prompt(question);
    return opcion;


    
}


export async function leerInput(message){
        
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if( value.length === 0){
                    console.log(value);
                    return 'Por favor Ingrese un valor';
                }
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc;
}