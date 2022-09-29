import { DiscordLogo, Lightning } from 'phosphor-react'
export default function Video() {
    return (
        <div className='flex-1 p-4'>
            <div className='bg-black flex justify-center'>
                <div className='h-full w-full max-w-[1100px] max-h-[65vh] aspect-video justfy-center items-center'></div>
            </div>
            <div className="py-8 mx-4">
                <div className="flex items-start gap-16">
                    <div className="flex-1 2xl:pr-56 xl:pr-2 sm:pr-0">
                        <h1 className="text-2xl font-bold">Abertura ignite lab</h1>
                        <p className="mt-4 text-gray-200 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum vero laborum voluptatibus error explicabo nulla perspiciatis. Laboriosam expedita cupiditate quam eligendi voluptatem minus placeat animi, sed, sint deleniti dignissimos repellat.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm flex bg-green-500 items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do discord
                        </a>
                        <a href="" className="p-4 text-sm border flex border-blue-500 text-blue-500 items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-700 transition-colors">
                            <Lightning size={24} />
                            Acesse o Desafio
                        </a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
