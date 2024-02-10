import Image from 'next/image'

interface CardItemProps {
    team1: string
    team2: string
    gameTime: string
}

export function CardItem({ team1, team2, gameTime }: CardItemProps) {
    return (
        <li className="w-full flex items-center justify-between pt-6 border-t-2 border-gray-800 first:pt-0 first:border-t-0">
            <Image
                className="hover:scale-110 hover:transition-transform"
                src={team1}
                alt={`Imagem da bandeira do país ${team1}.`}
            />

            <strong className="font-black text-4xl text-gray-200 hover:scale-110 hover:transition-transform">
                {gameTime}
            </strong>

            <Image
                className="hover:scale-110 hover:transition-transform"
                src={team2}
                alt={`Imagem da bandeira do país ${team2}.`}
            />
        </li>
    )
}
