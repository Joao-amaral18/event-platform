import { CaretRight, DiscordLogo, Lightning, FileArrowDown } from 'phosphor-react'
import { Oval } from 'react-loader-spinner'
import { Player, Youtube, DefaultUi } from '@vime/react'
import '@vime/core/themes/default.css'
import { gql, useQuery } from '@apollo/client'

interface VideoProps {
    lessonSlug: string
}

const GET_LESSON_BY_SLUG = gql`
    query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      bio
      avatarURL
      name
    }
  }
}

`

interface GetLessonBySlugRes {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string
            avatarURL: string
            name: string
        }
    }
}

export default function Video(props: VideoProps) {

    const { data } = useQuery<GetLessonBySlugRes>(GET_LESSON_BY_SLUG, {
        variables: { slug: props.lessonSlug }
    })

    if (!data) {
        return (
            <div className="flex-1 mx-auto grid place-content-center">
                <Oval
                    height={100}
                    width={100}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#ffffff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}

                />
            </div>)
    } else {
        return (
            <div className='flex-1 p-4'>
                <div className='bg-black flex justify-center'>
                    <div className='h-full w-full max-w-[1100px] max-h-[65vh] aspect-video justfy-center items-center'>
                        <Player>
                            <Youtube videoId={data.lesson.videoId} />
                            <DefaultUi />

                        </Player>
                    </div>
                </div>

                <div className="py-8 mx-4">
                    <div className="flex items-start gap-16">
                        <div className="flex-1 2xl:pr-56 xl:pr-2 sm:pr-0">
                            <h1 className="text-2xl font-bold">{data?.lesson.title}
                            </h1>
                            <p className="mt-4 text-gray-200 leading-relaxed">{data?.lesson.description}</p>
                            <div className="flex items-center gap-4 mt-6">
                                <img className='h-16 w-16 rounded-full border-2 border-blue-500' src={data?.lesson.teacher.avatarURL} alt="" />
                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block ">{data?.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block">{data?.lesson.teacher.bio}</span>
                                </div>
                            </div>
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
                    <div className='gap-8 mt-20 grid grid-cols-2'>
                        <a href="" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                            <div className="bg-green-700 h-full p-6 flex items-center">
                                <FileArrowDown size={40} />
                            </div>
                            <div className="py-6 leading-relaxed">
                                <strong className="text-2xl">Material complementar</strong>
                                <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
                            </div>
                            <div className="h-full p-6 flex items-center">
                                <CaretRight size={24} />
                            </div>
                        </a>
                        <a href="" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                            <div className="bg-green-700 h-full p-6 flex items-center">
                                <FileArrowDown size={40} />
                            </div>
                            <div className="py-6 leading-relaxed">
                                <strong className="text-2xl">Wallpapers exclusivos</strong>
                                <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
                            </div>
                            <div className="h-full p-6 flex items-center">
                                <CaretRight size={24} />
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}
