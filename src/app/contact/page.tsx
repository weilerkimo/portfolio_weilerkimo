export default function Contact() {
  return (
    <main style={{padding:32}}>
      <h1>Contact</h1>
      <p>If you want to see full case studies or discuss an internship opportunity, email me at <a href="mailto:youremail@example.com">youremail@example.com</a></p>
      <p>Or use this simple form (FormSubmit):</p>
      <form action="https://formsubmit.co/youremail@example.com" method="POST" style={{maxWidth:640}}>
        <input name="name" required placeholder="Name" style={{display:'block', width:'100%', marginBottom:8}} />
        <input name="email" type="email" required placeholder="Email" style={{display:'block', width:'100%', marginBottom:8}} />
        <textarea name="message" required placeholder="Message" style={{display:'block', width:'100%', marginBottom:8}} />
        <button type="submit" style={{padding:'8px 12px'}}>Send</button>
      </form>
    </main>
  );
}