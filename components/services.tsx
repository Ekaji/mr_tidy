import React, {useState} from 'react'

export default function Services() {

    const services = [
        {
            title: "Our Services",
            content: "At MR Tidy Nigeria, we understand the importance of a clean and safe environment.That's why we offer a wide range of waste management services to meet the needs of our residential, commercial, and industrial clients."
        },
        {
            title: "Material Recovery and Recycling",
            content: " Our recycling services include collection of recyclable materials from commercial, industrial and residential customers, for which we charge collection and processing fees. Each day, our facilities receive and process a wide variety of recyclable materials including cardboard, glass, plastic containers, office paper and newsprint. Our managers are skilled at harvesting quality recoverable material that is marketed to post-consumer mills for the best attainable product value. Through our network of material recovery facilities and our recycling collection services, we work hard to help our customers reduce waste generation and increase recovery rates. "
        },
        {
            title: "Dumpsite/Landfill management",
            content: "  We provide excellent dumpsite/landfill management services. We currently provide the highest standards of environmental protection while effectively disposing of non-recyclable, non-hazardous solid waste that cannot be diverted. Our facilities are staffed by experienced operators who employ the most modern landfill operating procedures. To ensure that we continue to meet the highest environmental protection standards, we encourage government inspection of our sites and invest in independent third-party monitoring."
        },
        {
            title: "Waste Containerization",
            content: "   As is a common knowledge in our company ‘waste management strategies without effective waste containerization is counterproductive’, we recognize that effective containerization drives effective waste management. As a result of this, we offer the supply of quality and durable waste containers ranging from 240 litre bins to Mammoth bins for effective waste containerization. We have strategic partnerships all over the world for the supply of state-of-the-art waste containers."
        }, {
            title: "Vector Control",
            content: " According to our intelligence, vector-borne infections have been recorded to be one of the largest causes of health risks that have long impacted human health for decades especially in sub-Saharan Africa. These diseases range from malaria, typhoid, cholera, yellow fever, dengue fever and river blindness amongst others. To curb the effects of these disease causing vectors, we offer efficient vector control using industry standard pesticides and fumigation services to rid your environment of disease causing germs."
        }, {
            title: "ZLGA Domestic",
            content: "     ZLGA Domestic is a hygiene solution company that specializes in cleaning services and the distribution of quality hygiene, industrial/domestic, products for industrial and domestic use. A customer focused firm with an objective to use our wealth of experiences, professional work force and quality products and services to meet the needs of our customers. ZLGA Domestic is dedicated to deliver 101% on the investments of our customers by a combination of hard work, professionalism and excellence in service delivery. ZLGA Domestic is best known for Professionalism, dynamism, affordability and quality of products used for all cleaning tasks. We are one of the best in janitorial cleaning and fumigation services in Nigeria. We are your perfect cleaning contractor. "
        }, {
            title: "Revenue Collection System",
            content: "We offer an electronic revenue collection payment system that provides a transparent means of payment for waste, water bill and general utilities. Our system offers a transparent revenue collection generation system and also easy to use system for payments for our customers."
        }, {
            title: "Residential",
            content: "We provide environmentally responsible and affordable non-hazardous solid municipal waste solutions. We possess the experience and resources to provide our customers with superior customer service, while remaining sensitive to environmental concerns. Municipal waste removal services include curbside bag service, fully or semi-automated systems, and customized community programs."
        }, {
            title: "Commercial and Industrial",
            content: "   We provide hand collection and containerized services to a wide variety of commercial and industrial customers. Most commercial and industrial customers are provided with containers that are designed to be lifted mechanically and either emptied into a collation vehicle’s compactor/tipper or, in the case of the large roll-off containers, to be loaded onto the collection vehicle. Our standard commercial containers generally range in size from 240 liters bins to Roll on Roll off Containers."
        }
    ];

    const initialState = {
        display: 'hidden',
        content: ''
    }

    const [popover, setPopover] = useState(initialState)

    return (
        <section className=" text-black">

            <div className="mx-auto max-w-screen-xl px-4 py-0 lg:py-32 lg:flex lg:items-center">
                <div className="mx-auto">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            Our Services
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                            At MR Tidy Nigeria, we understand the importance of a clean and safe environment. {"That's"}
                            why we offer a wide range of
                                                                                                        waste management services to meet the needs of our residential, commercial, and industrial clients.
                        </p>
                    </div>

                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

                        {/* <div className={`flex justify-center  ${popover.display}`}> 
                          <div className={`absolute lg:w-[50%] z-20 lg:h-[50%] cursor-pointer bg-black`}>            
                            <div className='text-white flex justify-center'>
                              {popover.content}
                            </div>
                          </div>
                      </div> */}

                        <div className="relative mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {
                            services.map(({title, content} : {
                                title: string;
                                content: string;
                            }, i : number) => (
                                <div className="block relative rounded-xl border p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                                    key={title}>
                                      <div className='flex justify-between'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                        </svg>
                                        {
                                    popover.content == content ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 cursor-pointer" onClick={() => setPopover(initialState)} viewBox="0 0 24 24">
                                            <circle className="fill-current" cx="12" cy="12" r="11"/>
                                            <path className="fill-white" d="M9.29 8.71a1 1 0 0 1 1.42 0L12 10.59l1.29-1.3a1 1 0 1 1 1.42 1.42L13.41 12l1.3 1.29a1 1 0 0 1-1.42 1.42L12 13.41l-1.29 1.3a1 1 0 0 1-1.42-1.42L10.59 12l-1.3-1.29a1 1 0 0 1 0-1.42z"/>
                                        </svg>
                                          ) : null
                                        }
                                      </div>
                                    {
                                    popover.content == content ? (
                                        <div className={
                                            `flex justify-center ${
                                                popover.display
                                            }`
                                        }>
                                            <div className={`absolute top-1/2 z-20 mt-1 pt-4 px-8 lg:p-8 cursor-pointer bg-white`}>
                                                <div className='flex justify-center'>
                                                    {
                                                    popover.content
                                                } </div>
                                            </div>
                                        </div>

                                    ) : null
                                }

                                    <h2 className="mt-4 text-xl font-bold text-gray-700">
                                        {title}</h2>

                                    <p className="mt-1 text-sm text-gray-500 h-16 overflow-hidden block line-clamp-4 ">
                                        {content} </p>
                                    <p className='cursor-pointer'
                                        onClick={
                                            () => setPopover({display: 'block', content})
                                    }>Read More</p>
                                </div>
                            ))
                        } </div>

                    </div>
                </div>

            </div>

        </section>

    )
}
