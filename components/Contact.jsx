
export default function Contact(){
    return(
        <section id='Contact' className='w-full h-screen flex justify-center items-center p-4 mt-24'>
        <form method='POST' action='https://getform.io/f/f01851be-3ae2-4f3d-8590-f073120f3019' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-2 border-pink-600 text-gray-300'>Send me a message</p>
          </div>
                <input className='messageInput p-2' type='text' placeholder='Name' name='name' required/>
                <input className='messageInput my-4 p-2' type='email' placeholder='Email' name='email' required/>
                <textarea name='message' className='messageBox' color='30' rows='10' placeholder='Message' required></textarea>
                <button type='submit' className='px-4 py-2 my-8 text-white w-40 h-10 p-2.5 bg-gradient-to-r from-fuchsia-500 to-blue-800 rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex'>Send message</button>
         </form>
        </section>
    )
}