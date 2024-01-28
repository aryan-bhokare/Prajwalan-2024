import styles from './EventPage.module.css'
import demo from './demo.png'
function EventPage() {
    return (
        <>
        <div className='my-5'>
            <div className={styles.eventPage}>
                <div className={styles.eventLogoDiv}>
                    <img src={demo} className='pt-4' alt="..." />
                    <h1 className="mt-2 text-white text-center">INNOV-A-THON</h1>
                    <p className='text-white text-center' >Tagline(if any) - Lorem ipsum dolor sit amet.</p>
                    <button id='b1' class="relative inline-flex my-4 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Register Now
                        </span>
                    </button>
                </div>
                <hr />
                <div className={styles.info}>
                    <p className="text-white my-1 font-bold"><span>Description</span></p>
                    <p className="text-white my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis tenetur cumque facere vel sint animi cum deserunt sunt repellendus alias eveniet laborum voluptates hic nulla architecto fugit aliquid, suscipit nostrum modi consequatur repudiandae et! Nisi, provident praesentium. Ut illum qui quisquam nam sint numquam. Laborum tempore vitae molestiae architecto.</p>
                    <p className="text-white mt-4 font-bold">Entry Fees</p>
                    <p className="text-white my-1">Rs. 100 per team</p>
                    <p className="text-white mt-4 font-bold">Deadline</p>
                    <p className="text-white my-1">25 February 2024</p>
                    <p className="text-white mt-4 font-bold">Event Date and Time</p>
                    <p className="text-white my-1">1 March 2024 - 01:00 PM</p>
                    <p className="text-white mt-4 font-bold">Location</p>
                    <p className="text-white my-1">Department of Information Technology, GCOEA</p>
                </div>
                
            </div>
        </div>
        <hr style={{display:'block',width:"90%",marginLeft:'auto',marginRight:'auto'}} className='my-5'/>
        <div className={styles.rules} style={{marginBottom:"30px"}}>
            <h1 className='text-white text-xl my-4 font-bold'>Rules and Regulations</h1>
            <ul className="text-white">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, minima. ipsum dolor sit amet consectetur adipisicing elit. Ex error labore eius sequi? Dolores, nesciunt?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error labore eius sequi? Dolores, nesciunt?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error labore eius sequi? Dolores, nesciunt?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error labore eius sequi? Dolores, nesciunt?</li>
            </ul>
        </div>
        </>
    )
}
export default EventPage;