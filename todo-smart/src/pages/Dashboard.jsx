import {FaPlus} from 'react-icons/fa'

export default function Dashboard () {
    return (
        <div className='min-h-screen bg-gray-950 text-white p-6'>
            {/* Header */}

            <div className='flex items-center justify-between mb-8' >
        <div>
            <h1 className='text-3xl font-bold1'>TO DO Smart 🚀</h1>
            <p className='text-gray-400'>Suas tarefas + Google Agenda + whatsApp</p>
            </div>

            <button className='bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-xl flex items-center gap-2 fonte-medium'>
                <FaPlus />
                Adicionar nova tarefa
            </button>
            </div>

            {/*Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
                <div className='bg-gray-900 p-5 rounded-2xl border border-gray-800'>
                    <p className='text-gray-400 text-sm'> 
                        Total de tarefas:
                    </p>
                    <h2 className='text-3xl font-bold mt-2'>0</h2>
                </div>


                <div className='bg-gray-900 p-5 rounded-2xl border border-gray-800'>
                    <p className='text-gray-400 text-sm'> Pendentes </p>
                    <h2 className='text-3xl font-bold mt-2 text-yellow-400'>0</h2>
                </div>

                <div className='bg-gray-900 p-5 rounded-2xl border border-gray-800'>
                    <p className='text-gray-400 text-sm'> Concluídas </p>
                    <h2 className='text-3xl font-bold mt-2 text-green-400'>0</h2>
                </div>
            </div>

            {/* Listagem de tarefas */}

            <div className='bg-gray-900 rounded-2xl border border-gray-800 p-6'>
                <h3 className='text-xl font-bold mb-4'>Minhas tarefas</h3>

                <div className='text-center py-12 text-gray-500'>
                    Nenhuma tarefa encontrada ✨
                </div>
            </div>


        </div>
    )