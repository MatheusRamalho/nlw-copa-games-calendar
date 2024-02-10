import Image from 'next/image'

import { Card } from '@/components/Card'

import logo from '@/assets/logo.svg'
import argentinaFlag from '@/assets/flags/icon-argentina.svg'
import australiaFlag from '@/assets/flags/icon-australia.svg'
import belgiumFlag from '@/assets/flags/icon-belgium.svg'
import brazilFlag from '@/assets/flags/icon-brazil.svg'
import cameroonFlag from '@/assets/flags/icon-cameroon.svg'
import canadaFlag from '@/assets/flags/icon-canada.svg'
import costaRicaFlag from '@/assets/flags/icon-costa-rica.svg'
import croatiaFlag from '@/assets/flags/icon-croatia.svg'
import denmarkFlag from '@/assets/flags/icon-denmark.svg'
import ecuadorFlag from '@/assets/flags/icon-ecuador.svg'
import englandFlag from '@/assets/flags/icon-england.svg'
import franceFlag from '@/assets/flags/icon-france.svg'
import germanyFlag from '@/assets/flags/icon-germany.svg'
import ghanaFlag from '@/assets/flags/icon-ghana.svg'
import iranFlag from '@/assets/flags/icon-iran.svg'
import japanFlag from '@/assets/flags/icon-japan.svg'
import mexicoFlag from '@/assets/flags/icon-mexico.svg'
import moroccoFlag from '@/assets/flags/icon-morocco.svg'
import netherlandsFlag from '@/assets/flags/icon-netherlands.svg'
import polandFlag from '@/assets/flags/icon-poland.svg'
import portugalFlag from '@/assets/flags/icon-portugal.svg'
import qatarFlag from '@/assets/flags/icon-qatar.svg'
import saudiArabiaFlag from '@/assets/flags/icon-saudi-arabia.svg'
import senegalFlag from '@/assets/flags/icon-senegal.svg'
import serbiaFlag from '@/assets/flags/icon-serbia.svg'
import southKoreaFlag from '@/assets/flags/icon-south-korea.svg'
import spainFlag from '@/assets/flags/icon-spain.svg'
import switzerlandFlag from '@/assets/flags/icon-switzerland.svg'
import tunisiaFlag from '@/assets/flags/icon-tunisia.svg'
import unitedStatesFlag from '@/assets/flags/icon-united-states.svg'
import uruguayFlag from '@/assets/flags/icon-uruguay.svg'
import walesFlag from '@/assets/flags/icon-wales.svg'

export default function Home() {
    return (
        <div className="w-fit py-14 mx-auto flex flex-col items-center">
            <header className="mb-16 text-center">
                <Image src={logo} alt="" />
            </header>

            <main className="max-w-7xl flex flex-wrap items-stretch justify-center gap-8 ">
                <Card.Root gameDate="20/11" gameWeekDay="Domingo">
                    <Card.Item
                        team1={qatarFlag}
                        gameTime="13:00"
                        team2={ecuadorFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="21/11" gameWeekDay="Segunda">
                    <Card.Item
                        team1={englandFlag}
                        gameTime="10:00"
                        team2={iranFlag}
                    />
                    <Card.Item
                        team1={senegalFlag}
                        gameTime="13:00"
                        team2={netherlandsFlag}
                    />
                    <Card.Item
                        team1={unitedStatesFlag}
                        gameTime="16:00"
                        team2={walesFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="22/11" gameWeekDay="Terça">
                    <Card.Item
                        team1={argentinaFlag}
                        gameTime="07:00"
                        team2={saudiArabiaFlag}
                    />
                    <Card.Item
                        team1={denmarkFlag}
                        gameTime="10:00"
                        team2={tunisiaFlag}
                    />
                    <Card.Item
                        team1={mexicoFlag}
                        gameTime="13:00"
                        team2={polandFlag}
                    />
                    <Card.Item
                        team1={franceFlag}
                        gameTime="16:00"
                        team2={australiaFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="23/11" gameWeekDay="Quarta">
                    <Card.Item
                        team1={moroccoFlag}
                        gameTime="07:00"
                        team2={croatiaFlag}
                    />
                    <Card.Item
                        team1={germanyFlag}
                        gameTime="10:00"
                        team2={japanFlag}
                    />
                    <Card.Item
                        team1={spainFlag}
                        gameTime="13:00"
                        team2={costaRicaFlag}
                    />
                    <Card.Item
                        team1={belgiumFlag}
                        gameTime="16:00"
                        team2={canadaFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="24/11" gameWeekDay="Quinta">
                    <Card.Item
                        team1={switzerlandFlag}
                        gameTime="07:00"
                        team2={cameroonFlag}
                    />
                    <Card.Item
                        team1={uruguayFlag}
                        gameTime="10:00"
                        team2={southKoreaFlag}
                    />
                    <Card.Item
                        team1={portugalFlag}
                        gameTime="13:00"
                        team2={ghanaFlag}
                    />
                    <Card.Item
                        team1={brazilFlag}
                        gameTime="16:00"
                        team2={serbiaFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="25/11" gameWeekDay="Sexta">
                    <Card.Item
                        team1={walesFlag}
                        gameTime="07:00"
                        team2={iranFlag}
                    />
                    <Card.Item
                        team1={qatarFlag}
                        gameTime="10:00"
                        team2={senegalFlag}
                    />
                    <Card.Item
                        team1={netherlandsFlag}
                        gameTime="13:00"
                        team2={ecuadorFlag}
                    />
                    <Card.Item
                        team1={englandFlag}
                        gameTime="16:00"
                        team2={unitedStatesFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="26/11" gameWeekDay="Sábado">
                    <Card.Item
                        team1={tunisiaFlag}
                        gameTime="07:00"
                        team2={australiaFlag}
                    />
                    <Card.Item
                        team1={polandFlag}
                        gameTime="10:00"
                        team2={saudiArabiaFlag}
                    />
                    <Card.Item
                        team1={franceFlag}
                        gameTime="13:00"
                        team2={denmarkFlag}
                    />
                    <Card.Item
                        team1={argentinaFlag}
                        gameTime="16:00"
                        team2={mexicoFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="27/11" gameWeekDay="Domingo">
                    <Card.Item
                        team1={japanFlag}
                        gameTime="07:00"
                        team2={costaRicaFlag}
                    />
                    <Card.Item
                        team1={belgiumFlag}
                        gameTime="10:00"
                        team2={moroccoFlag}
                    />
                    <Card.Item
                        team1={croatiaFlag}
                        gameTime="13:00"
                        team2={canadaFlag}
                    />
                    <Card.Item
                        team1={spainFlag}
                        gameTime="16:00"
                        team2={germanyFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="28/11" gameWeekDay="Segunda">
                    <Card.Item
                        team1={cameroonFlag}
                        gameTime="07:00"
                        team2={serbiaFlag}
                    />
                    <Card.Item
                        team1={southKoreaFlag}
                        gameTime="10:00"
                        team2={ghanaFlag}
                    />
                    <Card.Item
                        team1={brazilFlag}
                        gameTime="13:00"
                        team2={switzerlandFlag}
                    />
                    <Card.Item
                        team1={portugalFlag}
                        gameTime="16:00"
                        team2={uruguayFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="29/11" gameWeekDay="Terça">
                    <Card.Item
                        team1={ecuadorFlag}
                        gameTime="12:00"
                        team2={senegalFlag}
                    />
                    <Card.Item
                        team1={netherlandsFlag}
                        gameTime="12:00"
                        team2={qatarFlag}
                    />
                    <Card.Item
                        team1={iranFlag}
                        gameTime="16:00"
                        team2={unitedStatesFlag}
                    />
                    <Card.Item
                        team1={walesFlag}
                        gameTime="16:00"
                        team2={englandFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="30/11" gameWeekDay="Quarta">
                    <Card.Item
                        team1={tunisiaFlag}
                        gameTime="12:00"
                        team2={franceFlag}
                    />
                    <Card.Item
                        team1={australiaFlag}
                        gameTime="12:00"
                        team2={denmarkFlag}
                    />
                    <Card.Item
                        team1={polandFlag}
                        gameTime="16:00"
                        team2={argentinaFlag}
                    />
                    <Card.Item
                        team1={saudiArabiaFlag}
                        gameTime="16:00"
                        team2={mexicoFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="01/12" gameWeekDay="Quinta">
                    <Card.Item
                        team1={croatiaFlag}
                        gameTime="12:00"
                        team2={belgiumFlag}
                    />
                    <Card.Item
                        team1={canadaFlag}
                        gameTime="12:00"
                        team2={moroccoFlag}
                    />
                    <Card.Item
                        team1={japanFlag}
                        gameTime="16:00"
                        team2={spainFlag}
                    />
                    <Card.Item
                        team1={costaRicaFlag}
                        gameTime="16:00"
                        team2={germanyFlag}
                    />
                </Card.Root>

                <Card.Root gameDate="02/12" gameWeekDay="Sexta">
                    <Card.Item
                        team1={southKoreaFlag}
                        gameTime="12:00"
                        team2={portugalFlag}
                    />
                    <Card.Item
                        team1={ghanaFlag}
                        gameTime="12:00"
                        team2={uruguayFlag}
                    />
                    <Card.Item
                        team1={serbiaFlag}
                        gameTime="16:00"
                        team2={switzerlandFlag}
                    />
                    <Card.Item
                        team1={cameroonFlag}
                        gameTime="16:00"
                        team2={brazilFlag}
                    />
                </Card.Root>
            </main>
        </div>
    )
}
