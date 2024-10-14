import React from 'react'

const DetailsTable = () => {

    const detailsData = [
        { label: 'Speciality', value: 'Body Fitness' },
        { label: 'Awards', value: 'Coach of the year' },
        { label: 'Area of Expertise', value: ["Diploma in body building", "Diploma on personal training", "expert in sports", "Diploma in body building"] },
        { label: 'Training Center', value: 'Fitness Park' },
        { label: 'Location', value: 'Casablanca' },
    ];

    return (
        <table className="table-auto w-full text-left mt-8 font-lato">
            <tbody>
                {
                    detailsData.map((detail, index) => (
                        <tr
                            key={index}
                            className={`h-50px md:h-[55px] 2xl:h-[68px] text-[1.1rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.8rem] 2xl:text-[2rem] ${index % 2 === 0 ? 'bg-bgGray' : 'bg-white'}`}
                        >
                            <td className="px-8 py-2 text-dark-200 font-semibold">{detail.label}:</td>
                            <td className='text-txt-400 py-4'>
                                {
                                    Array.isArray(detail.value)
                                        ? (
                                            <ul>
                                                {
                                                    detail.value.map(item => (
                                                        <li className='flex items-center gap-4' key={item}>
                                                            <img className='w-[15px] h-[13px]' src="/images/checkmark.png" alt="" />
                                                            {item}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                        : detail.value
                                }
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default DetailsTable