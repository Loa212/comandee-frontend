import { useState } from "react"
import ReactCountryFlag from "react-country-flag"
import { MdExpandMore } from "react-icons/md"

interface Lang {
    text: string,
    countryCode: string,
}

interface LanguagesArray extends Array<Lang> { }

interface ThisProps {
    Langs: LanguagesArray,
    SelectedLanguage: number,
    setSelectedLanguage: (number) => void
}



const LanguagePicker = ({ Langs, SelectedLanguage, setSelectedLanguage }: ThisProps) => {
    const [IsOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={`dropdown mt-4 ${IsOpen ? 'dropdown-open' : ''}`}>

                <button
                    onClick={() => setIsOpen(!IsOpen)}
                    tabIndex={0} className="m-1 btn btn-sm btn-ghost bg-gray-200 border-0 ">
                    <ReactCountryFlag className="text-2xl mr-4" countryCode={Langs[SelectedLanguage].countryCode} svg />
                    {Langs[SelectedLanguage].text}
                    <MdExpandMore className="ml-2" />
                </button>

                {IsOpen &&

                    <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 divide-y divide-gray-700 divide-opacity-10">

                        {
                            Langs.filter((val, index) => index !== SelectedLanguage).map((el, i) => {
                                return (
                                    <li key={i}>
                                        <button
                                            onClick={() => {
                                                setSelectedLanguage(Langs.findIndex((e) => e.countryCode === el.countryCode));
                                                setIsOpen(false)
                                            }}
                                            className="ml-2 btn btn-md btn-ghost border-0 justify-start"
                                        >
                                            <ReactCountryFlag className="text-2xl mr-4" countryCode={el.countryCode} svg />
                                            {el.text}
                                        </button>
                                    </li>
                                )
                            })
                        }


                    </ul>
                }

            </div>
        </>


    )

}

export default LanguagePicker
