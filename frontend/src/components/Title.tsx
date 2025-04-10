import React from 'react'

type Props = {
    text1: string;
    text2?: string; // optional className or something similar
}

const Title = (props: Props) => {
    return (
            <div className={`flex ${props.text2 ?? ''} items-center mt-10 mb-10`}>
                <h1 className="bg-blue-200 rounded-lg w-fit py-3 px-4 uppercase text-blue-500">
                    {props.text1}
                </h1>

            </div>
           
       
    )
}

export default Title
