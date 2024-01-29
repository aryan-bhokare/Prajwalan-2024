import { useEffect } from 'react';
import styles from './EventPage.module.css'
import demo from './demo.png'
import { useLocation } from 'react-router-dom';
function EventPage(props) {
    const location = useLocation();
    const eventDetails = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    console.log(eventDetails);
    return (
        <div style={{width:"90%",margin:"20px auto",padding:"10px 20px",borderRadius:"15px",backgroundColor:"#e4d7f91f"}}>
            <div className='my-5'>
                <div className={styles.eventPage}>
                    <div className={styles.eventLogoDiv}>
                        <img src={demo} className='pt-4' alt="..." />
                        <div className="mt-2 text-3xl p-2 font-bold text-white text-center">{`${eventDetails.eventTitle}`}</div>
                        <p className='text-white text-center' >{`${eventDetails.tagline}`}</p>
                        <button id='b1' className="relative inline-flex my-4 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Register Now
                            </span>
                        </button>
                    </div>
                    <hr />
                    <div className={styles.info}>
                        <p className="text-white my-1 font-bold"><span>Description</span></p>
                        <p className="text-white my-1">{`${eventDetails.description}`}</p>
                        <p className="text-white mt-4 font-bold">Entry Fees</p>
                        <p className="text-white my-1">{`Rs. ${eventDetails.fees} per team`}</p>
                        <p className="text-white mt-4 font-bold">Deadline</p>
                        {/* <p className="text-white my-1">25 February 2024</p> */}
                        <p className="text-white mt-4 font-bold">Event Date and Time</p>
                        <p className="text-white my-1">1 March 2024 - 01:00 PM</p>
                        <p className="text-white mt-4 font-bold">Location</p>
                        <p className="text-white my-1">Department of Information Technology, GCOEA</p>
                    </div>

                </div>
            </div>
            <hr style={{ display: 'block', width: "100%", marginLeft: 'auto', marginRight: 'auto' }} className='my-5' />
            <div className={styles.rules} style={{ marginBottom: "30px" }}>
                <h1 className='text-white text-xl my-4 font-bold'>Rules and Regulations</h1>
                <ul className="text-white">
                    
                        {eventDetails.rules?.map((rule, i) => (
                            <li key={i}>{rule}</li>
                        ))}
                    
                </ul>
            </div>
            <div />
        </div>
    )
}
export default EventPage;