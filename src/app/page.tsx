import Image from 'next/image'

import { Card } from '../components/Card'
import { CardItem } from '../components/CardItem'

import logo from '../assets/logo.svg'
import argentinaFlag from '../assets/flags/icon-argentina.svg'
import australiaFlag from '../assets/flags/icon-australia.svg'
import belgiumFlag from '../assets/flags/icon-belgium.svg'
import brazilFlag from '../assets/flags/icon-brazil.svg'
import cameroonFlag from '../assets/flags/icon-cameroon.svg'
import canadaFlag from '../assets/flags/icon-canada.svg'
import costaRicaFlag from '../assets/flags/icon-costa-rica.svg'
import croatiaFlag from '../assets/flags/icon-croatia.svg'
import denmarkFlag from '../assets/flags/icon-denmark.svg'
import ecuadorFlag from '../assets/flags/icon-ecuador.svg'
import englandFlag from '../assets/flags/icon-england.svg'
import franceFlag from '../assets/flags/icon-france.svg'
import germanyFlag from '../assets/flags/icon-germany.svg'
import ghanaFlag from '../assets/flags/icon-ghana.svg'
import iranFlag from '../assets/flags/icon-iran.svg'
import japanFlag from '../assets/flags/icon-japan.svg'
import mexicoFlag from '../assets/flags/icon-mexico.svg'
import moroccoFlag from '../assets/flags/icon-morocco.svg'
import netherlandsFlag from '../assets/flags/icon-netherlands.svg'
import polandFlag from '../assets/flags/icon-poland.svg'
import portugalFlag from '../assets/flags/icon-portugal.svg'
import qatarFlag from '../assets/flags/icon-qatar.svg'
import saudiArabiaFlag from '../assets/flags/icon-saudi-arabia.svg'
import senegalFlag from '../assets/flags/icon-senegal.svg'
import serbiaFlag from '../assets/flags/icon-serbia.svg'
import southKoreaFlag from '../assets/flags/icon-south-korea.svg'
import spainFlag from '../assets/flags/icon-spain.svg'
import switzerlandFlag from '../assets/flags/icon-switzerland.svg'
import tunisiaFlag from '../assets/flags/icon-tunisia.svg'
import unitedStatesFlag from '../assets/flags/icon-united-states.svg'
import uruguayFlag from '../assets/flags/icon-uruguay.svg'
import walesFlag from '../assets/flags/icon-wales.svg'

export default function Home() {
    return (
        <div className="w-fit py-14 mx-auto flex flex-col items-center">
            <header className="mb-16 text-center">
                <Image src={logo} alt="" />
            </header>

            <main className="max-w-7xl flex flex-wrap items-stretch justify-center gap-8 ">
                <Card gameDate="20/11" gameWeekDay="Domingo">
                    <CardItem team1={qatarFlag} gameTime="13:00" team2={ecuadorFlag} />
                </Card>

                <Card gameDate="21/11" gameWeekDay="Segunda">
                    <CardItem team1={englandFlag} gameTime="10:00" team2={iranFlag} />
                    <CardItem team1={senegalFlag} gameTime="13:00" team2={netherlandsFlag} />
                    <CardItem team1={unitedStatesFlag} gameTime="16:00" team2={walesFlag} />
                </Card>

                <Card gameDate="22/11" gameWeekDay="Terça">
                    <CardItem team1={argentinaFlag} gameTime="07:00" team2={saudiArabiaFlag} />
                    <CardItem team1={denmarkFlag} gameTime="10:00" team2={tunisiaFlag} />
                    <CardItem team1={mexicoFlag} gameTime="13:00" team2={polandFlag} />
                    <CardItem team1={franceFlag} gameTime="16:00" team2={australiaFlag} />
                </Card>

                <Card gameDate="23/11" gameWeekDay="Quarta">
                    <CardItem team1={moroccoFlag} gameTime="07:00" team2={croatiaFlag} />
                    <CardItem team1={germanyFlag} gameTime="10:00" team2={japanFlag} />
                    <CardItem team1={spainFlag} gameTime="13:00" team2={costaRicaFlag} />
                    <CardItem team1={belgiumFlag} gameTime="16:00" team2={canadaFlag} />
                </Card>

                <Card gameDate="24/11" gameWeekDay="Quinta">
                    <CardItem team1={switzerlandFlag} gameTime="07:00" team2={cameroonFlag} />
                    <CardItem team1={uruguayFlag} gameTime="10:00" team2={southKoreaFlag} />
                    <CardItem team1={portugalFlag} gameTime="13:00" team2={ghanaFlag} />
                    <CardItem team1={brazilFlag} gameTime="16:00" team2={serbiaFlag} />
                </Card>

                <Card gameDate="25/11" gameWeekDay="Sexta">
                    <CardItem team1={walesFlag} gameTime="07:00" team2={iranFlag} />
                    <CardItem team1={qatarFlag} gameTime="10:00" team2={senegalFlag} />
                    <CardItem team1={netherlandsFlag} gameTime="13:00" team2={ecuadorFlag} />
                    <CardItem team1={englandFlag} gameTime="16:00" team2={unitedStatesFlag} />
                </Card>

                <Card gameDate="26/11" gameWeekDay="Sábado">
                    <CardItem team1={tunisiaFlag} gameTime="07:00" team2={australiaFlag} />
                    <CardItem team1={polandFlag} gameTime="10:00" team2={saudiArabiaFlag} />
                    <CardItem team1={franceFlag} gameTime="13:00" team2={denmarkFlag} />
                    <CardItem team1={argentinaFlag} gameTime="16:00" team2={mexicoFlag} />
                </Card>

                <Card gameDate="27/11" gameWeekDay="Domingo">
                    <CardItem team1={japanFlag} gameTime="07:00" team2={costaRicaFlag} />
                    <CardItem team1={belgiumFlag} gameTime="10:00" team2={moroccoFlag} />
                    <CardItem team1={croatiaFlag} gameTime="13:00" team2={canadaFlag} />
                    <CardItem team1={spainFlag} gameTime="16:00" team2={germanyFlag} />
                </Card>

                <Card gameDate="28/11" gameWeekDay="Segunda">
                    <CardItem team1={cameroonFlag} gameTime="07:00" team2={serbiaFlag} />
                    <CardItem team1={southKoreaFlag} gameTime="10:00" team2={ghanaFlag} />
                    <CardItem team1={brazilFlag} gameTime="13:00" team2={switzerlandFlag} />
                    <CardItem team1={portugalFlag} gameTime="16:00" team2={uruguayFlag} />
                </Card>

                <Card gameDate="29/11" gameWeekDay="Terça">
                    <CardItem team1={ecuadorFlag} gameTime="12:00" team2={senegalFlag} />
                    <CardItem team1={netherlandsFlag} gameTime="12:00" team2={qatarFlag} />
                    <CardItem team1={iranFlag} gameTime="16:00" team2={unitedStatesFlag} />
                    <CardItem team1={walesFlag} gameTime="16:00" team2={englandFlag} />
                </Card>

                <Card gameDate="30/11" gameWeekDay="Quarta">
                    <CardItem team1={tunisiaFlag} gameTime="12:00" team2={franceFlag} />
                    <CardItem team1={australiaFlag} gameTime="12:00" team2={denmarkFlag} />
                    <CardItem team1={polandFlag} gameTime="16:00" team2={argentinaFlag} />
                    <CardItem team1={saudiArabiaFlag} gameTime="16:00" team2={mexicoFlag} />
                </Card>

                <Card gameDate="01/12" gameWeekDay="Quinta">
                    <CardItem team1={croatiaFlag} gameTime="12:00" team2={belgiumFlag} />
                    <CardItem team1={canadaFlag} gameTime="12:00" team2={moroccoFlag} />
                    <CardItem team1={japanFlag} gameTime="16:00" team2={spainFlag} />
                    <CardItem team1={costaRicaFlag} gameTime="16:00" team2={germanyFlag} />
                </Card>

                <Card gameDate="02/12" gameWeekDay="Sexta">
                    <CardItem team1={southKoreaFlag} gameTime="12:00" team2={portugalFlag} />
                    <CardItem team1={ghanaFlag} gameTime="12:00" team2={uruguayFlag} />
                    <CardItem team1={serbiaFlag} gameTime="16:00" team2={switzerlandFlag} />
                    <CardItem team1={cameroonFlag} gameTime="16:00" team2={brazilFlag} />
                </Card>
            </main>
        </div>
    )
}
