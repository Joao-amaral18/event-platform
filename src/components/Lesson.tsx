import { isPast, format } from 'date-fns'
import { Lock, CheckCircle } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
    title: string,
    slug: string,
    avaliableAt: Date,
    lessonType: 'live' | 'class'
}

export default function Lesson(props: LessonProps) {

    const { slug } = useParams<{ slug: string }>();

    const isActive = slug === props.slug;


    const isLessonAvaliable = isPast(props.avaliableAt);
    const avaliableAtFormated = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    return (
        <div>
            <Link to={`/event/lesson/${props.slug}`} className='group'>
                <span className="text-gray-300">{avaliableAtFormated}</span>
                <div className={classNames(
                    'rounded border border-gray-500 p-6 mt-2 group-hover:border-green-500 ',
                    { 'bg-green-500': isActive }
                )}>
                    <header className="flex items-center justify-between">

                        {isLessonAvaliable ? (

                            <span
                                className={
                                    classNames(
                                        'text-sm font-medium flex items-center gap-2',
                                        {
                                            'text-white': isActive,
                                            'text-blue-500': !isActive
                                        }
                                    )
                                }
                            ><CheckCircle size={20} /> Conteúdo liberado</span>
                        ) : (
                            <span
                                className={
                                    classNames(
                                        'text-sm font-medium flex items-center gap-2',
                                        {
                                            'text-white': isActive,
                                            'text-orange-500': !isActive
                                        }
                                    )
                                }
                            ><Lock size={20} /> Em breve</span>
                        )}




                        <span className="text-xs px-2 py-[0.125rem] rounded border border-green-300 font-bold uppercase"

                        >{props.lessonType === 'live' ? 'AO VIVO' : 'aula prática'}</span>
                    </header>
                    <strong
                        className={
                            classNames(
                                'block  mt-5 ',
                                {
                                    'text-white': isActive,
                                    'text-gray-200': !isActive
                                }
                            )
                        }>{props.title}</strong>
                </div></Link >
        </div >
    )
}
