import { ReactNode } from 'react'

interface CardProps {
    gameDate: string
    gameWeekDay: string
    children: ReactNode
}

export const Card = ({ gameDate, gameWeekDay, children }: CardProps) => {
    return (
        <article className="w-72 py-8 px-6 border-b-2 border-yellow-700 rounded-md bg-gray-900 text-center">
            <h2 className="w-fit flex items-center justify-center gap-4 m-auto mb-14 py-2 px-4 border-solid border border-yellow-700 rounded-md font-bold text-yellow-500">
                {gameDate}
                <span className="font-bold uppercase text-sm text-white">{gameWeekDay}</span>
            </h2>

            <ul className="list-none flex flex-col gap-6">{children}</ul>
        </article>
    )
}
