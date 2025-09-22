import React from "react"

interface TitleProps {
    content: string
}


const Title: React.FC<TitleProps> = ({ content }) => {
    const content1 = content.split(" ")[0]
    const content2 = content.split(" ")[1]
    const content3 = content.split(" ")[2]

    return (
        <>
            <div className="text-center mb-16 pt-32">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-wrap px-5">
                    {content1} <span className="text-primary"> {content2} </span> {content3}
                </h2>
                {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed homes and businesses across India with our zero-investment solar installations.
          </p> */}
            </div>
        </>
    )

}

export default Title;