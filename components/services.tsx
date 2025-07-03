export const Services = () => {
    const services = [
        { id: '01', title: 'Web Development', description: 'Building responsive and dynamic websites using modern technologies.' },
        { id: '02', title: 'Mobile App Development', description: 'Creating user-friendly mobile applications for iOS and Android.' },
        { id: '03', title: 'UI/UX Design', description: 'Designing intuitive and engaging user interfaces and experiences.' },
        { id: '04', title: 'SEO Optimization', description: 'Improving website visibility and search engine rankings.' },
        { id: '05', title: 'Content Creation', description: 'Producing high-quality content for blogs, websites, and social media.' },
        { id: '06', title: 'Digital Marketing', description: 'Developing effective online marketing strategies to reach target audiences.' }
    ] 

    return(
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                    <h2 className="text-6xl font-extrabold sticky top-20"> SERVICES </h2>

                </div>

                <div className="md:w-3/4">
                    {services.map(service => (
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-gray-300 font-bold text5-xl mr-6">

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}