const services = [
        { id: '01', title: 'Web Development', description: 'Building responsive and dynamic websites using modern technologies.' },
        { id: '02', title: 'Mobile App Development', description: 'Creating user-friendly mobile applications for iOS and Android.' },
        { id: '03', title: 'UI/UX Design', description: 'Designing intuitive and engaging user interfaces and experiences.' },
        { id: '04', title: 'SEO Optimization', description: 'Improving website visibility and search engine rankings.' },
        { id: '05', title: 'Content Creation', description: 'Producing high-quality content for blogs, websites, and social media.' },
        { id: '06', title: 'Digital Marketing', description: 'Developing effective online marketing strategies to reach target audiences.' }
    ]

export const Services = () => { 

    return(
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row gap-12">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                    <h2 className="text-5xl text-purple-300 font-extrabold sticky top-20"> SERVICES </h2>

                </div>

                <div className="md:w-3/4 gap-12">
                    {services.map(service => (
                        <div key={service.id} className="mb-16 flex items-start" >
                            <div className="text-purple-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                 <p>{service.description}</p>   
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}