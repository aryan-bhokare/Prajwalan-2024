import React, { useEffect, useState } from 'react'
// import events from '../../data/eventdata'
// import EventCard from './EventCard'
import {config} from 'dotenv'
import { createClient } from '@supabase/supabase-js'
import { childVariants, parentVariants } from '../../animations/common'
import { motion } from 'framer-motion'
import NFTCard from './NFTCard'

function EventList(props) {
  // config()
  // configDotenv()
  const eventList = [];
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState([])
  const SUPABASE_API = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6YWN5b3drc3p6cmhodmp0am96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwMTYwODIsImV4cCI6MjAyMjU5MjA4Mn0.3DRS5AZAvnYLHSn_0Pcb3HTWiF8F30XFzddRaZ9_wKI"
  const PROJECT_URL = "https://yzacyowkszzrhhvjtjoz.supabase.co"
  // const SUPABASE_API = import.meta.env.VITE_SUPABASE_API
  // const PROJECT_URL = import.meta.env.VITE_PROJECT_URL
  const supabaseAPI = SUPABASE_API
  const projectURL = PROJECT_URL

  // const supabaseAPI =REACT_APP_SUPABASE_API
  // const projectURL =REACT_APP_PROJECT_URL

  const category = props.category
  // const category = 
  const supabaseClient = createClient(projectURL, supabaseAPI)
  async function getEvents() {
    try{
    const { data } = await supabaseClient.from("events_final").select("*").eq("category", category)
    setEvents(data)
    console.log(data);
    setIsLoading(false);
    }catch(e){
      setEvents([])
    }
  }

  useEffect(() => {
    getEvents()
  }, []);
  if (isLoading) {
    return "Loading"
  }
    return (
      <>
        <motion.div
          variants={parentVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {/* Collection Card  */}
          {events.map((event, idx) => {
            return (
              <motion.div variants={childVariants} key={idx}>
                <NFTCard
                  {...event}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </>
    )
  
}


export default EventList
